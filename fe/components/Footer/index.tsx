import * as React from "react";

import css from "./styles.scss";

interface Props {
  className?: string;
}

export default class Footer extends React.Component<Props> {
  public render() {
    const { className } = this.props;
    return <div />;
  }
}
