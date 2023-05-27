import { createSlice } from '@reduxjs/toolkit';
// import { IStore, TIncomingTime } from "shimps";

const initialState: Store = {};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
