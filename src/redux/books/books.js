import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    genres: 'Action',
    author: 'Suzanne Collins',
    progres: 64,
    chapter: 'Chapter 17: "A Lesson Learned"',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    genres: 'Fantasy',
    author: 'Frank Herbert',
    progres: 8,
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    genres: 'Economics',
    author: 'Suzanne Collins',
    progres: 0,
    chapter: 'Introduction: "A Lesson Learned"',
  },
];

const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => [...state, action.payload],
    removeBooks: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addBooks, removeBooks } = slice.actions;

export default slice.reducer;
