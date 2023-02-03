import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      message: "Under construction",
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
// const CHECK_STATUS = 'redux/category/CHECK_STATUS';

// const initialState = {
//   category: [],
// };

// export const checkStatus = (status) => ({
//   type: CHECK_STATUS,
//   text: status,
// });

// export default function categoryReducer(state = initialState, action) {
//   switch (action.type) {
//     case CHECK_STATUS:
//       return {
//         state,
//         category: [state.category, 'under-construction'],
//       };
//     default:
//       return state;
//   }
// }
