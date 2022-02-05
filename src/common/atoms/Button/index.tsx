import React from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, type, ...rest }: IButtonProps) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
