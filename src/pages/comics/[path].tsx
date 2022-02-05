import React, { useMemo, useRef, useState } from 'react';
import { Loading } from 'common/atoms';
import { Layout } from 'common/templates';
import { RankingFilter, RankingList } from 'components/comics';
import { selectFilterParams } from 'store/modules/comicsSlice';
import { useAppSelector, useFetch } from 'hooks';

const paths = [{ params: { path: 'romance' } }];

const getPageName = (path: string) => {
  switch (path) {
    case 'romance':
      return '로맨스';
    default:
      return '';
  }
};

const Romance = ({ path }) => {
  const pageName: string = `${getPageName(path)} 장르 랭킹`;
  const observerRef = useRef<IntersectionObserver>();
  const [page, setPage] = useState(1);
  const { list, hasNext, isLoading } = useFetch({
    url: `/comics/${path}`,
    page,
  });
  const filterParams = useAppSelector(selectFilterParams);
  const { freedEpisodeSize, contentsState } = filterParams;
  const comicRankList = useMemo(() => {
    return list.filter((item) => {
      if (freedEpisodeSize) {
        let isDisplay = item.freedEpisodeSize >= freedEpisodeSize;
        if (contentsState) {
          isDisplay = isDisplay && item.contentsState === contentsState;
        }
        return isDisplay;
      }
      if (contentsState) return item.contentsState === contentsState;
      return item;
    });
  }, [list, filterParams]);

  const observer = (node) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasNext) setPage((page) => page + 1);
    });

    node && observerRef.current.observe(node);
  };

  return (
    <Layout pageName={pageName}>
      <RankingFilter path={path} />
      <RankingList comicRankList={comicRankList} />
      <div ref={observer} />
      <>{isLoading && <Loading />}</>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const { path } = context.params;
  return { props: { path } };
};

export const getStaticPaths = async () => {
  return { paths, fallback: false };
};

export default Romance;
