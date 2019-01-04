import gql from "graphql-tag";
import Head from "next/head";
import { Query } from "react-apollo";

import { GQLQuery } from "be/schema/graphqlTypes";
import { Game } from "fe/components/Game/";
import Page from "fe/components/Page/";
import withApollo from "fe/lib/apollo/";

import css from "./styles.scss";

const gameQueryGQL = gql`
  query {
    game {
      subjects {
        id
        meanings
        readings
        characters
      }
    }
  }
`;

class GameQuery extends Query<GQLQuery> {}

const Homepage = ({}) => {
  return (
    <Page className={css.homepage}>
      <Head>
        <title>Save Tokyo! Japanese Vocabulary Speed Test</title>
      </Head>
      <GameQuery query={gameQueryGQL}>
        {({ data }) =>
          data && data.game ? (
            <Game initialSubjects={data.game.subjects} />
          ) : null
        }
      </GameQuery>
    </Page>
  );
};

Homepage.getInitialProps = async () => {
  return {};
};

export default withApollo(Homepage);
