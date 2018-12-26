import { HttpLink } from "apollo-link-http";

import { withData } from "./withData";

// A function that accepts a `context` object (SSR only) and returns an ApolloClient config
const config = context => {
  let headers = {};
  if (context) {
    headers = {
      // Forward cookies from initial SSR render to backend
      cookie: context.req.headers["cookie"]
    };
  }

  /*
    Since the backend is part of the same app, we could use apollo-client on
    the server without any network calls. However, this is difficult to do in
    Next.js, and makes it harder to separate the backend in the future.
  */
  return {
    link: new HttpLink({
      uri: process.env.GRAPHQL_ENDPONT,
      credentials: "same-origin",
      headers
    })
  };
};

export default withData(config);
