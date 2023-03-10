import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store/store';
type FilterItem = {
  create_st?: string | null;
  create_end?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  keyword?: string | null;
  keyword_target?: string | null;
  date_scope?: string | undefined | null;
};
interface FilterState {
  filterItem: Array<FilterItem>;
}

const initialState: FilterState = {
  filterItem: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilterItem(state, action: PayloadAction<FilterItem>) {
      state.filterItem?.push(action.payload);
    },
  },
});

export const { addFilterItem } = filterSlice.actions;
export const dateFilter = (state: RootState) => state.filter.filterItem;
export default filterSlice.reducer;
