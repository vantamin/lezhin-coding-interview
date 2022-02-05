import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>레진코믹스</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/comics/romance">
              <a>로맨스 장르 랭킹</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default IndexPage;
