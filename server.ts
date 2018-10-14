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
  const app = express();

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
  apolloServer.applyMiddleware({ app });

  if (!options || !options.backendOnly) {
    // Prepare Nextjs
    const nextJsApp = next({ dir: './fe', dev });
    const handle = nextJsApp.getRequestHandler();
    console.log('Starting NextJS frontend...');
    await nextJsApp.prepare();

    // Routing for Nextjs
    app.get('*', (req, res, skip) => {
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
  const httpServer = app.listen(process.env.PORT, () => {
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
