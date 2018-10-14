import "reflect-metadata";

import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import { importSchema } from 'graphql-import';
import * as next from 'next';
import { createConnection } from "typeorm";
import { parse } from 'url';

import resolvers from './be/resolvers';
import ormConfig from './ormconfig';

const dev = process.env.NODE_ENV !== 'production';

interface ServerOptions {
  backendOnly?: boolean;  // Enable to test the graphql server only
  database?: any;         // Override the database to connect to (eg. for testing)
}

/**
 * startServer
 * Starts the express app that serves both the frontend and backend
 */
export async function startServer(options?: ServerOptions) {
  // Connect to DB
  const db = await createConnection({
    ...ormConfig,
    ...{
      database: options ? options.database : undefined,
    },
  });

  // Prepare ApolloServer
  const server = express();
  const apolloServer = new ApolloServer({
    context: {
      db,
    },
    resolvers,
    typeDefs: importSchema('./be/schema/schema.graphql'),
  });
  apolloServer.applyMiddleware({ app: server });

  if (!options.backendOnly) {
    // Prepare Nextjs
    const app = next({ dir: './fe', dev });
    const handle = app.getRequestHandler();
    await app.prepare();

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
  }

  // Start express server
  server.listen(process.env.PORT, () => {
    // tslint:disable-next-line no-console
    console.log(`Server started, listening on port ${process.env.PORT} for incoming requests.`);
  });

  return server;
}
