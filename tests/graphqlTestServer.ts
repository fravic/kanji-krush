/**
 * Sets up a node server specifically for running tests on graphql resolvers.
 * This runs tests against a mock db.
 */
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import { importSchema } from 'graphql-import';

import resolvers from '../be/resolvers';

// Prepare ApolloServer
const server = express();
const apolloServer = new ApolloServer({
  context: {
    db: 'TODO',
  },
  resolvers,
  typeDefs: importSchema('schema/schema.graphql' /* relative to active dir (root) */),
});
apolloServer.applyMiddleware({ app: server });

export default server;
