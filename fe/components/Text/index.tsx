import * as React from "react";

import css from "./styles.scss";

interface Props {
  className?: string;
  type: "h1" | "h2" | "body" | "label";
}

export default class Text extends React.Component<Props> {
  public render() {
    const { children, className, type } = this.props;
    const props = {
      children,
      className: `${css.component} ${css[type]} ${className ? className : ""}`
    };
    if (type === "h1") {
      return <h1 {...props} />;
    } else if (type === "h2") {
      return <h2 {...props} />;
    }
    return <div {...props} />;
  }
}
