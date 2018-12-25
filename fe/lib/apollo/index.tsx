import { HttpLink } from "apollo-link-http";

import { withData } from "./withData";

// Can also be a function that accepts a `context` object (SSR only) and returns a config
const config = {
  /*
    Since the backend is part of the same app, we could use apollo-client on
    the server without any network calls. However, this is difficult to do in
    Next.js, and makes it harder to separate the backend in the future.
  */
  link: new HttpLink({
    uri: process.env.GRAPHQL_ENDPONT
  })
};

export default withData(config);
