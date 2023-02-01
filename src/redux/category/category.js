import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: 'under-construction',
};
const gory = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      message: 'under-construction',
    }),
  },
});
export const { checkStatus } = gory.actions;
export default gory.reducer;
