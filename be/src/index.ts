/**
 * NodeJS proxy to enable HTTPS connections to Prisma
 * Expects SSL certs in ./certs folder
 */
import * as express from 'express';
import * as fs from 'fs';
import * as https from 'https';
import * as proxy from 'http-proxy-middleware';

const app = express();

app.use('/', proxy({ target: process.env.PRISMA_ENDPOINT, changeOrigin: true }));

https.createServer({
  key: fs.readFileSync('./certs/privatekey.pem'),
  cert: fs.readFileSync('./certs/certificate.pem'),
}, app).listen(process.env.NODEJS_PROXY_PORT);
