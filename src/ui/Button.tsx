import React, { forwardRef } from 'react';

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  icon?: React.ReactElement;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, children, icon, className, type = 'button' }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={`button ${className || ''}`}
      >
        {children && children}
        {icon && <span className='button-icon'>{icon}</span>}
      </button>
    );
  }
);