import gql from "graphql-tag";
import { useState } from "react";
import { Query } from "react-apollo";

import { GQLQuery } from "be/schema/graphqlTypes";
import Game from "fe/components/Game";
import Header from "fe/components/Header";
import { KanaInputField } from "fe/components/KanaInputField";
import Page from "fe/components/Page/";
import withApollo from "fe/lib/apollo/";

import css from "./styles.scss";

const gameQueryGQL = gql`
  query {
    game {
      subjects {
        meanings
        readings
        characters
      }
    }
  }
`;

class GameQuery extends Query<GQLQuery> {}

const Homepage = ({}) => {
  const [kanaInputValue, setKanaInputValue] = useState("");
  return (
    <Page className={css.homepage}>
      <GameQuery query={gameQueryGQL}>
        {({ data, refetch }) => (
          <>
            <Header />
            {data && data.game ? <Game game={data.game} /> : null}
            <KanaInputField
              onChange={setKanaInputValue}
              value={kanaInputValue}
            />
          </>
        )}
      </GameQuery>
    </Page>
  );
};

Homepage.getInitialProps = async () => {
  return {};
};

export default withApollo(Homepage);
