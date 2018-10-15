import { Express } from 'express';
import * as next from 'next';

const dev = process.env.NODE_ENV !== 'production';

// Create a NextJS app for the frontend and set routes
export async function setupNextJSApp(expressApp: Express) {
  // Prepare Nextjs
  const nextJsApp = next({ dir: './fe', dev });
  const handle = nextJsApp.getRequestHandler();
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

  return expressApp;
}
