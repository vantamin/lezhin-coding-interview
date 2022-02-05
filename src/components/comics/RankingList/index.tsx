import React from 'react';
import RankingItem from 'components/comics/RankingItem';
import styles from './RankingList.module.css';

const RankingList = ({ comicRankList }) => {
  if (comicRankList.length > 0) {
    return (
      <section>
        <h3 className="noWrap">랭킹 목록</h3>
        <ul className={styles.list}>
          {comicRankList.map((data) => (
            <RankingItem key={data.id} data={data} />
          ))}
        </ul>
      </section>
    );
  }

  return <></>;
};

export default React.memo(RankingList);
