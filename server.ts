// tslint:disable:no-console
import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import { importSchema } from "graphql-import";
import { createConnection } from "typeorm";

import { fetchSubjects } from "./be/lib/wanikani";
import resolvers from "./be/resolvers";
import { setupNextJSApp } from "./fe";
import ormConfig from "./ormconfig";

interface ServerOptions {
  backendOnly?: boolean; // Enable to test the graphql server only
  database?: any; // Override the database to connect to (eg. for testing)
}

/**
 * startServer
 * Starts the express app that serves both the frontend and backend
 */
export async function startServer(options?: ServerOptions) {
  const expressApp = express();
  expressApp.use(cookieParser());

  // Connect to DB
  /* TODO: Disabling DB for now.
  const db = await createConnection({
    ...ormConfig,
    ...{
      database: options ? options.database : undefined,
    },
  });
  */

  // Prepare ApolloServer
  const apolloServer = new ApolloServer({
    context: ({ req }) => ({
      // db,
      req
    }),
    resolvers,
    typeDefs: importSchema("./be/schema/schema.graphql")
  });
  apolloServer.applyMiddleware({ app: expressApp });

  if (!options || !options.backendOnly) {
    setupNextJSApp(expressApp);
  }

  // Start express server
  const httpServer = expressApp.listen(process.env.PORT, () => {
    // tslint:disable-next-line no-console
    console.log(
      `Server started, listening on port ${
        process.env.PORT
      } for incoming requests.`
    );
  });

  // Close the db connection when server exits
  httpServer.on("close", () => {
    console.log("App shutting down...");
    // db.close();
  });

  // Prefetch the Wanikani subjects when server starts
  fetchSubjects();

  return httpServer;
}
