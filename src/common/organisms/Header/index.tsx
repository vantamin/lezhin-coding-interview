import React from 'react';
import { Logo } from 'common/atoms';

interface IHeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = ({ ...rest }: IHeaderProps) => {
  return (
    <header className="noWrap" {...rest}>
      <Logo />
    </header>
  );
};

export default Header;
