import { useState } from "react";

import { Button } from "fe/components/Button";

type Props = {
  login: (apiKey: string) => Promise<any>;
};

export const LoginForm: React.SFC<Props> = props => {
  const [apiKeyValue, setApiKeyValue] = useState("");
  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        props.login(apiKeyValue);
        return false;
      }}
    >
      <input
        onChange={e => setApiKeyValue(e.currentTarget.value)}
        type="text"
        value={apiKeyValue}
      />
      <Button>Log in</Button>
    </form>
  );
};
