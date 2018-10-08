import { HttpLink } from 'apollo-link-http';
import { withData } from 'next-apollo';

// can also be a function that accepts a `context` object (SSR only) and returns a config
const config = {
  link: new HttpLink({
  }),
};

export default withData(config);
