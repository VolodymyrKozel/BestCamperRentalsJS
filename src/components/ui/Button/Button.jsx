import React from 'react';
import clsx from 'clsx';
import css from './Button.module.css';

const Button = React.forwardRef(
  (
    {
      variant = 'primary',
      size = 'medium',
      children,
      className = '',
      as: Component = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <Component
        className={clsx(
          css.button,
          variant && css[`button--${variant}`],
          size && css[`button--${size}`],
          className
        )}
        ref={ref}
        {...props}>
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
