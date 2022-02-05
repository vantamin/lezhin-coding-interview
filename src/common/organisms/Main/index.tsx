import React from 'react';
import styles from './Main.module.css';

interface IMainProps extends React.HTMLAttributes<HTMLElement> {
  pageName?: string;
}

const Main = ({ children, pageName }: IMainProps) => {
  return (
    <main className={styles.root}>
      {pageName && <h2>{pageName}</h2>}
      {children}
    </main>
  );
};

export default Main;
