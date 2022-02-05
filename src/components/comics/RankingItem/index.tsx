import React, { useMemo } from 'react';
import { Thumbnail } from 'common/atoms';
import { RankingText } from 'components/comics';
import { ComicRankItem } from 'types/comics/romance';
import styles from './RankingItem.module.css';

interface IRankingItemProps {
  data: ComicRankItem;
}

const weeks = new Array('일', '월', '화', '수', '목', '금', '토');

const getPeriods = (periods) => {
  return periods
    .map((period) => {
      switch (period) {
        case 'MON':
          return '월';
        case 'TUE':
          return '화';
        case 'WED':
          return '수';
        case 'THU':
          return '목';
        case 'FRI':
          return '금';
        case 'SAT':
          return '토';
        case 'SUN':
          return '일';
      }
    })
    .join(', ');
};

const RankingItem = ({ data }: IRankingItemProps) => {
  const {
    title,
    artists,
    schedule: { periods },
    freedEpisodeSize,
    contentsState,
    currentRank,
    previousRank,
    updatedAt,
    thumbnailSrc,
  } = data;
  const artistName = useMemo(
    () =>
      artists
        .filter(
          ({ role }) =>
            role === 'writer' || role === 'painter' || role === 'scripter'
        )
        .map(({ name }) => name)
        .join(', '),
    [artists]
  );
  const period = useMemo(() => {
    if (contentsState === 'completed') {
      return '완결';
    } else {
      return `매주 ${
        getPeriods(periods) || weeks[new Date(updatedAt).getDay()]
      }요일 연재`;
    }
  }, [periods, contentsState, updatedAt]);

  return (
    <li>
      <a href="#none" className={styles.link}>
        <div className={styles.contents}>
          <strong className={styles.title}>{title}</strong>
          <dl>
            <dt className="noWrap">작가명</dt>
            <dd>{artistName}</dd>
            <dt className="noWrap">무료 회차</dt>
            <dd>{freedEpisodeSize}화 무료</dd>
            <dt className="noWrap">완결/연재 여부</dt>
            <dd>{period}</dd>
          </dl>
        </div>
        <RankingText currentRank={currentRank} previousRank={previousRank} />
        <Thumbnail src={thumbnailSrc} className={styles.thumbnail} />
      </a>
    </li>
  );
};

export default React.memo(RankingItem);
