import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import { importSchema } from 'graphql-import';
import * as next from 'next';
import { parse } from 'url';

import resolvers from './be/resolvers';

const dev = process.env.NODE_ENV !== 'production';

// Prepare ApolloServer
const server = express();
const apolloServer = new ApolloServer({
  context: {
    db: 'TODO',
  },
  resolvers,
  typeDefs: importSchema('./be/schema/schema.graphql'),
});
apolloServer.applyMiddleware({ app: server });

// Prepare Nextjs
const app = next({ dir: './fe', dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {

  // Routing for Nextjs
  server.get('*', (req, res, skip) => {
    if (req.url === '/graphql') {
      // Let apollo-server handle this
      skip();
    }
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Start express server
  server.listen(process.env.PORT, () => {
    // tslint:disable-next-line no-console
    console.log(`Server started, listening on port ${process.env.PORT} for incoming requests.`);
  });
});

export default server;
