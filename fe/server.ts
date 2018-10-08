import { GraphQLServer } from 'graphql-yoga';
import * as next from 'next';
import { Prisma } from 'prisma-binding';
import { parse } from 'url';

import resolvers from './resolvers';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const prisma = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  typeDefs: '../schema/prisma.graphql',
});

const server = new GraphQLServer({
  context: (req) => ({
    ...req,
    db: prisma,
  }),
  resolvers,
  typeDefs: '../schema/schema.graphql',
});

// Prepare Nextjs hotloading
app.prepare().then(() => {
  // Routing for Nextjs
  server.get('*', (req, res, skip) => {
    if (req.url === '/graphql') {
      // Pass to graphql-yoga
      skip();
    }
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Start graphql-yoga server
  server.start({
    endpoint: '/graphql',
  }, ({ port }) => {
    // tslint:disable-next-line no-console
    console.log(`Server started, listening on port ${port} for incoming requests.`);
  });
});

export default server;
