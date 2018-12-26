import gql from "graphql-tag";
import Router from "next/router";
import { Mutation } from "react-apollo";

import { GQLAuthPayload, GQLQuery } from "be/schema/graphqlTypes";
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

const Settings = ({}) => {
  return (
    <Page className={css.homepage}>
      <LoginMutation mutation={loginMutationGQL}>
        {login => (
          <LoginForm
            login={async (wanikaniApiKey: string) => {
              const res = await login({
                variables: {
                  wanikaniApiKey
                }
              });
              Router.push("/");
              return res;
            }}
          />
        )}
      </LoginMutation>
    </Page>
  );
};

Settings.getInitialProps = async () => {
  return {};
};

export default withApollo(Settings);
