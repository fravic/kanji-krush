/**
 * next-apollo
 * https://github.com/adamsoffer/next-apollo
 *
 * MIT License
 *
 * Copyright (c) 2017 Adam Soffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import fetch from "isomorphic-fetch";

let apolloClient: ApolloClient<any> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!(process as any).browser) {
  (global as any).fetch = fetch;
}

const createDefaultCache = () => new InMemoryCache();
const isBrowser = (process as any).browser;

function create(apolloConfig, initialState) {
  const createCache = apolloConfig.createCache || createDefaultCache;
  const config = {
    cache: createCache().restore(initialState || {}),
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    ...apolloConfig
  };

  delete config.createCache;

  return new ApolloClient(config);
}

export default function initApollo(apolloConfig, initialState, ctx?) {
  if (typeof apolloConfig === "function") {
    apolloConfig = apolloConfig(ctx);
  }
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(apolloConfig, initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(apolloConfig, initialState);
  }

  return apolloClient;
}
