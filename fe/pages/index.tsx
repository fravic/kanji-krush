import * as React from 'react';

import Button from '../components/Button/';
import Page from '../components/Page/';
import Text from '../components/Text/';
import withApollo from '../lib/apollo';
import css from './styles.scss';

class Homepage extends React.Component {
  public render() {
    return (
      <Page className={css.homepage}>
        <Text className={css.h1} type="h1">
          Instant Time Series Charts
        </Text>
        <Text className={css.p} type="body">
          The easiest way to create a time series chart and add data to it over time.
        </Text>
        <Button>
          Create a chart
        </Button>
      </Page>
    );
  }
}

export default withApollo(Homepage);
