// tslint:disable:no-console
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
  const expressApp = express();

  // Connect to DB
  const db = await createConnection({
    ...ormConfig,
    ...{
      database: options ? options.database : undefined,
    },
  });

  // Prepare ApolloServer
  const apolloServer = new ApolloServer({
    context: {
      db,
    },
    resolvers,
    typeDefs: importSchema('./be/schema/schema.graphql'),
  });
  apolloServer.applyMiddleware({ app: expressApp });

  if (!options || !options.backendOnly) {
    // Prepare Nextjs
    const nextJsApp = next({ dir: './fe', dev });
    const handle = nextJsApp.getRequestHandler();
    console.log('Starting NextJS frontend...');
    await nextJsApp.prepare();

    // Routing for NextJS
    // Chart page
    expressApp.get('/:chartSlug', (req, res) => {
      // NextJS serves static pages in the "/pages" directory
      // Here, the actual page is "/chart", and we parse the slug into the query string
      const queryParams = { chartSlug: req.params.chartSlug };
      nextJsApp.render(req, res, '/chart', queryParams);
    });
    // Homepage
    expressApp.get('*', (req, res) => {
      handle(req, res);
    });
  }

  // Start express server
  const httpServer = expressApp.listen(process.env.PORT, () => {
    // tslint:disable-next-line no-console
    console.log(`Server started, listening on port ${process.env.PORT} for incoming requests.`);
  });

  // Close the db connection when server exits
  httpServer.on('close', () => {
    console.log('App shutting down...');
    db.close();
  });

  return httpServer;
}
