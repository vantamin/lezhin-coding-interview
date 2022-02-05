import React, { useCallback } from 'react';
import { Button } from 'common/atoms';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  selectFilterOptions,
  selectFilterParams,
  toggleFilterOption,
} from 'store/modules/comicsSlice';
import styles from './RankingFilter.module.css';

interface IRankingFilterProps {
  path: string;
}

const RankingFilter = ({ path }: IRankingFilterProps) => {
  const dispatch = useAppDispatch();
  const filterOptions = useAppSelector(selectFilterOptions)[path];
  const filterParams = useAppSelector(selectFilterParams);

  const handleFilter = useCallback(({ key, value }) => {
    dispatch(toggleFilterOption({ key, value }));
  }, []);

  return (
    <section className={styles.root}>
      <h3 className="noWrap">필터 옵션</h3>
      {filterOptions.map(({ key, label, value }) => (
        <Button
          key={`${key}-${value}`}
          className={filterParams[key] === value ? styles.active : ''}
          onClick={() => handleFilter({ key, value })}
        >
          {label}
        </Button>
      ))}
    </section>
  );
};

export default React.memo(RankingFilter);
