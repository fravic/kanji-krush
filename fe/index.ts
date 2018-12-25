import { Express } from "express";
import * as next from "next";

const dev = process.env.NODE_ENV !== "production";

// Create a NextJS app for the frontend and set routes
export async function setupNextJSApp(expressApp: Express) {
  // Prepare Nextjs
  const nextJsApp = next({ dir: "./fe", dev });
  const handle = nextJsApp.getRequestHandler();
  await nextJsApp.prepare();

  // Routing for NextJS
  // Homepage
  expressApp.get("*", (req, res) => {
    handle(req, res);
  });

  return expressApp;
}
