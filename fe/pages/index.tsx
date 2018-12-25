import gql from "graphql-tag";
import * as React from "react";
import { Mutation } from "react-apollo";

import { GQLAuthPayload } from "be/schema/graphqlTypes";
import Game from "fe/components/Game";
import Header from "fe/components/Header";
import { LoginForm } from "fe/components/LoginForm";
import Page from "fe/components/Page/";
import withApollo from "fe/lib/apollo/";

import css from "./styles.scss";

const loginMutationGQL = gql`
  mutation($wanikaniApiKey: String!) {
    login(wanikaniApiKey: $wanikaniApiKey) {
      user {
        id
      }
    }
  }
`;

class LoginMutation extends Mutation<GQLAuthPayload> {}

const Homepage = ({}) => (
  <Page className={css.homepage}>
    <Header />
    <Game />
    <LoginMutation mutation={loginMutationGQL}>
      {login => (
        <LoginForm
          login={(wanikaniApiKey: string) =>
            login({
              variables: {
                wanikaniApiKey
              }
            })
          }
        />
      )}
    </LoginMutation>
  </Page>
);

Homepage.getInitialProps = async () => {
  return {};
};

export default withApollo(Homepage);
