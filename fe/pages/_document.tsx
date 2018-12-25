// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import NextDocument, { Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  public render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://use.typekit.net/pbj6bex.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
