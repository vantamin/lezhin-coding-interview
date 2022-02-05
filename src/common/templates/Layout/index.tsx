import React from 'react';
import Head from 'next/head';
import { Header, Main } from 'common/organisms';
import styles from './Layout.module.css';

interface ILayoutProps extends React.HTMLAttributes<HTMLElement> {
  pageName?: string;
}

const Layout = ({ children, pageName }: ILayoutProps) => {
  return (
    <div className={styles.root}>
      <Head>
        <title>{pageName} - 레진코믹스</title>
      </Head>
      <Header />
      <Main pageName={pageName}>{children}</Main>
    </div>
  );
};

export default Layout;
