import gql from 'graphql-tag';
import { withRouter, WithRouterProps } from 'next/router';
import * as React from 'react';
import { Query } from 'react-apollo';

import withApollo from '../../lib/apollo';

const ChartQuery = gql`
  query ChartQuery($chartSlug: String!) {
    chart(chartSlug: $chartSlug) {
      name
    }
  }
`;

type Props = {
} & WithRouterProps;

class Chart extends React.Component<Props> {
  public render() {
    const { router } = this.props;
    return (
      <Query query={ChartQuery} variables={{ chartSlug: router.query ? router.query.chartSlug : '' }}>
        {({ loading, error, data }) => {
          return (
            <div>
              Here's a chart!
              {loading ? 'Loading' : data && data.chart && data.chart.name}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withApollo(withRouter(Chart));
