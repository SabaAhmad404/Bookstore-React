import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      message: 'Under construction',
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
