import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store/store';

type UTMItem = {
  id: number;
  created_at: string;
  utm_url: string;
  utm_campaign_id: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign_name: string | null;
  utm_term: string | null;
  utm_memo: string | null;
  full_url: string;
  shorten_url: string;
};
interface State {
  utms: UTMItem[];
}

const initialState: State = {
  utms: [
    {
      id: 1,
      created_at: '',
      utm_url: '',
      utm_campaign_id: '',
      utm_source: '',
      utm_medium: '',
      utm_campaign_name: '',
      utm_memo: '',
      utm_term: '',
      full_url: '',
      shorten_url: '',
    },
  ],
};

export const UTMSlice = createSlice({
  name: 'UTMItem',
  initialState,
  reducers: {
    addUTM(state, action: PayloadAction<UTMItem>) {
      console.log(state);
      state.utms.push(action.payload);
    },
    deleteUTM(state, action: PayloadAction<number>) {
      state.utms = state.utms.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addUTM, deleteUTM } = UTMSlice.actions;
export const utms = (state: RootState) => state.utms.utms;
export default UTMSlice.reducer;
