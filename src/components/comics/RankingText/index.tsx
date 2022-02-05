import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretUp,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import styles from './RankingText.module.css';

interface IRankingTextProps {
  currentRank: number;
  previousRank: number;
}

const computeValue = ({ currentRank, previousRank }: IRankingTextProps) => {
  const value = previousRank - currentRank;

  if (value > 0) {
    return (
      <span className={styles.red}>
        {value} <FontAwesomeIcon color="red" icon={faCaretUp} title="상승" />
      </span>
    );
  }

  if (value === 0) {
    return <FontAwesomeIcon icon={faMinus} title="변동없음" />;
  }

  if (value < 0) {
    return (
      <span className={styles.blue}>
        {Math.abs(value)}{' '}
        <FontAwesomeIcon color="blue" icon={faCaretDown} title="하락" />
      </span>
    );
  }
};

const RankingText = ({ currentRank, previousRank }: IRankingTextProps) => {
  const memoizedValue = useMemo(
    () => computeValue({ currentRank, previousRank }),
    [currentRank, previousRank]
  );

  return (
    <div className={styles.rank}>
      <em className={styles.current}>
        <span className="noWrap">현재 랭킹 </span>
        {currentRank}
      </em>
      <span>
        <span className="noWrap">랭킹 </span>
        {memoizedValue}
      </span>
    </div>
  );
};

export default React.memo(RankingText);
