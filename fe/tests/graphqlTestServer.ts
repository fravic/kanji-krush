/**
 * Sets up a node server specifically for running tests on graphql resolvers.
 *
 * Note that this runs against the specified Prisma endpoint, and test data is
 * not cleaned up.
 */
import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';

import resolvers from '../resolvers';

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

export default server;
export { prisma };
