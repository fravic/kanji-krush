// tslint:disable:no-console
import { startServer } from "./server";

async function main() {
  console.log("Starting express server...");
  await startServer();
}

main();
