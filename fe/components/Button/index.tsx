import * as React from 'react';

import css from './styles.scss';

interface Props {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Button = ({ children, className, disabled }: Props) => (
  <button
    className={`${css.button} ${className || ''}`}
    disabled={disabled}
    type="submit"
  >
    {children}
  </button>
);
