import * as React from 'react';

import Game from 'fe/components/Game';
import Header from 'fe/components/Header';
import Page from 'fe/components/Page/';
import withApollo from 'fe/lib/apollo/';

import css from './styles.scss';

const Homepage = ({ }) => (
  <Page className={css.homepage}>
    <Header />
    <Game />
  </Page>
);

Homepage.getInitialProps = async () => {
  return {};
};

export default withApollo(Homepage);
