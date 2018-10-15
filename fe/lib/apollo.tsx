import { HttpLink } from 'apollo-link-http';
import { withData } from 'next-apollo';

// can also be a function that accepts a `context` object (SSR only) and returns a config
const config = {
  link: new HttpLink({
    uri: process.env.GRAPHQL_ENDPONT,
  }),
};

export default withData(config);
