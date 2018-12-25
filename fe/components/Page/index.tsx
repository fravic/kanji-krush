import * as React from "react";

import Footer from "../Footer";

import css from "./styles.scss";

interface Props {
  className?: string;
}

export default class Page extends React.Component<Props> {
  public render() {
    const { children, className } = this.props;
    return (
      <div className={`${css.page} ${className ? className : ""}`}>
        {children}
        <Footer className={css.footer} />
      </div>
    );
  }
}
