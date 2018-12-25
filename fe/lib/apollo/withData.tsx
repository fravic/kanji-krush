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

import { ApolloClient } from "apollo-client";
import Head from "next/head";
import * as React from "react";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import initApollo from "./initApollo";

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || "Unknown";
}

interface Props {
  serverState: { apollo: { data: any } };
}

/**
 * withData
 * This fork of next-apollo fixes adds some error logging and passes route props
 * to the child Page.
 */
export const withData = apolloConfig => {
  return ComposedComponent => {
    return class WithData extends React.Component<Props> {
      public static displayName = `WithData(${getComponentDisplayName(
        ComposedComponent
      )})`;

      // NextJS calls this on top-level page components to enable server-side operations
      public static async getInitialProps(ctx) {
        let serverState = {};

        // Evaluate the composed component's getInitialProps()
        let composedInitialProps = {};
        if (ComposedComponent.getInitialProps) {
          composedInitialProps = await ComposedComponent.getInitialProps(ctx);
        }

        // Run all GraphQL queries in the component tree
        // and extract the resulting data
        if (!(process as any).browser) {
          const apollo = initApollo(apolloConfig, null, ctx);

          try {
            // Run all GraphQL queries
            // Note: Since this is a separate tree from the main React app, any props
            // passed from above the top-level page will not make it through.
            await getDataFromTree(
              <ApolloProvider client={apollo}>
                <ComposedComponent
                  {...composedInitialProps}
                  router={{
                    // Add router props in case ComposedComponent uses them
                    asPath: ctx.asPath,
                    pathname: ctx.pathname,
                    query: ctx.query
                  }}
                />
              </ApolloProvider>
            );
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
            // tslint:disable-next-line:no-console
            console.error("Error getting data from tree:", error);
          }
          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind();

          // Extract query data from the Apollo store
          serverState = {
            apollo: {
              data: apollo.cache.extract()
            }
          };
        }

        return {
          serverState,
          ...composedInitialProps
        };
      }

      public apollo: ApolloClient<any> | null;

      constructor(props) {
        super(props);
        this.apollo = initApollo(
          apolloConfig,
          this.props.serverState.apollo.data
        );
      }

      public render() {
        return (
          <ApolloProvider client={this.apollo}>
            <ComposedComponent {...this.props} />
          </ApolloProvider>
        );
      }
    };
  };
};
