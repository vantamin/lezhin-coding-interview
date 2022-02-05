import { createSlice } from '@reduxjs/toolkit';
import type { AppState } from 'store';

export interface IState {
  filterOptions: {};
  filterParams: {
    freedEpisodeSize: string | number;
    contentsState: string;
  };
}

const initialState: IState = {
  filterOptions: {
    romance: [
      {
        key: 'contentsState',
        label: '연재중',
        value: 'scheduled',
      },
      {
        key: 'contentsState',
        label: '완결',
        value: 'completed',
      },
      {
        key: 'freedEpisodeSize',
        label: '무료회차 3개 ↑',
        value: 3,
      },
    ],
  },
  filterParams: {
    freedEpisodeSize: '',
    contentsState: '',
  },
};

export const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    toggleFilterOption: (state, { payload: { key, value } }) => {
      state.filterParams = Object.assign(state.filterParams, {
        [key]:
          state.filterParams[key] && state.filterParams[key] === value
            ? ''
            : value,
      });
    },
  },
});

export const { toggleFilterOption } = comicsSlice.actions;

export const selectFilterOptions = (state: AppState) =>
  state.comics.filterOptions;

export const selectFilterParams = (state: AppState) =>
  state.comics.filterParams;

export default comicsSlice.reducer;
