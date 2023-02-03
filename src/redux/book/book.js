import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    title: "The Hunger Games",
    genres: "Action",
    author: "Suzanne Collins",
    progres: 64,
    chapter: 'Chapter 17: "A Lesson Learned"',
  },
  {
    id: uuidv4(),
    title: "Dune",
    genres: "Fantasy",
    author: "Frank Herbert",
    progres: 8,
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: uuidv4(),
    title: "Capital in the Twenty-First Century",
    genres: "Economics",
    author: "Suzanne Collins",
    progres: 0,
    chapter: 'Introduction: "A Lesson Learned"',
  },
];
const bookReducer = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks: (state, action) => [...state, action.payload],

    removeBooks: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addBooks, removeBooks } = bookReducer.actions;

export default bookReducer.reducer;
// const ADD_BOOK = "redux/books/ADD_BOOK";
// const REMOVE_BOOK = "redux/books/REMOVE_BOOK";
// const initialState = {
//   Books: [
//     {
//       id: "1",
//       title: "The Hunger Games",
//       genres: "Action",
//       author: "Suzanne Collins",
//       progres: 64,
//       chapter: 'Chapter 17: "A Lesson Learned"',
//     },
//     {
//       id: "2",
//       title: "Dune",
//       genres: "Fantasy",
//       author: "Frank Herbert",
//       progres: 8,
//       chapter: 'Chapter 3: "A Lesson Learned"',
//     },
//     {
//       id: "3",
//       title: "Capital in the Twenty-First Century",
//       genres: "Economics",
//       author: "Suzanne Collins",
//       progres: 0,
//       chapter: 'Introduction: "A Lesson Learned"',
//     },
//   ],
// };
// export const Addbooks = (addbook) => ({
//   type: ADD_BOOK,
//   addbook,
// });
// export const removeBooks = (id) => ({
//   type: REMOVE_BOOK,
//   id,
// });
// export default function bookReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_BOOK:
//       return {
//         state,
//         Books: [state.Books, action.payload],
//       };
//     case REMOVE_BOOK:
//       return {
//         state,
//         Books: state.Books.filter((B) => B.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// }
