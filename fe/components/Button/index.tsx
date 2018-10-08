import * as React from 'react';

import css from './styles.scss';

interface Props {
  className?: string;
  disabled?: boolean;
}

export default class Text extends React.Component<Props> {
  public render() {
    const { children, className, disabled } = this.props;
    return (
      <button
        className={`${css.button} ${className || ''}`}
        disabled={disabled}
        type="submit"
      >
        {children}
      </button>
    );
  }
}
