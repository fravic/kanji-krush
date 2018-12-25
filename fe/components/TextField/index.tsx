import * as React from "react";

import Text from "../Text";

import css from "./styles.scss";

interface TProps {
  className?: string;
  disabled?: boolean;
  id: string;
  label: string;
  onChange: (value: string) => void;
  value: string;
}

export default class TextField extends React.Component<TProps> {
  public render() {
    const { className, disabled, id, label, onChange, value } = this.props;
    return (
      <div className={`${css.component} ${className}`}>
        <Text type="label" className={css.label}>
          <label htmlFor={id}>{label}</label>
        </Text>
        <input
          id={id}
          className={css.input}
          disabled={disabled}
          onChange={e => onChange(e.target.value)}
          value={value || ""}
        />
      </div>
    );
  }
}
