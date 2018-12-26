import gql from "graphql-tag";
import * as React from "react";
import { Mutation, Query } from "react-apollo";

import { GQLAuthPayload, GQLQuery } from "be/schema/graphqlTypes";
import Game from "fe/components/Game";
import Header from "fe/components/Header";
import { LoginForm } from "fe/components/LoginForm";
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

const loginMutationGQL = gql`
  mutation($wanikaniApiKey: String!) {
    login(wanikaniApiKey: $wanikaniApiKey) {
      user {
        id
      }
    }
  }
`;

class GameQuery extends Query<GQLQuery> {}
class LoginMutation extends Mutation<GQLAuthPayload> {}

const Homepage = ({}) => {
  return (
    <Page className={css.homepage}>
      <GameQuery query={gameQueryGQL}>
        {({ data, refetch }) => (
          <>
            <Header />
            {data && data.game ? <Game game={data.game} /> : null}
            <LoginMutation mutation={loginMutationGQL}>
              {login => (
                <LoginForm
                  login={async (wanikaniApiKey: string) => {
                    const res = await login({
                      variables: {
                        wanikaniApiKey
                      }
                    });
                    refetch();
                    return res;
                  }}
                />
              )}
            </LoginMutation>
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
