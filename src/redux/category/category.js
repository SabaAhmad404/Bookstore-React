import { createSlice } from "@reduxjs/toolkit";

const gory = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    checkStatus: (state) => {
      state.push("under-construction");
    },
  },
});
export const { checkStatus } = gory.actions;
export default gory.reducer;
