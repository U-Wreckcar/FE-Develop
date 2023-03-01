import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store/store';

interface FilterState {
  dateHist: string;
}

const initialState: FilterState = {
  dateHist: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    today: (state, action: PayloadAction<string>) => {
      state.dateHist = action.payload;
    },
  },
});

export const { today } = filterSlice.actions;
export const dateFilter = (state: RootState) => state.filter.dateHist;
export default filterSlice.reducer;
