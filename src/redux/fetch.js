import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const uniqueId = 'FuHmnCA7EBqJ1jB7klF3';
const URL = `${baseURL}/apps/${uniqueId}/books`;

const initialState = {
  books: [],
  loading: false,
};

const GET_ALL_BOOKS = 'books/getAllBooks';
const ADD_BOOK_API = 'book/addBookAPI';
const REMOVE_BOOK_API = 'book/removeBookAPI';

export const getAllBooks = createAsyncThunk(GET_ALL_BOOKS, async () => {
  const respo = await axios.get(URL);
  const { data } = respo;
  const books = Object.entries(data).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      Id: key,
      title,
      author,
      category,
    };
  });
  return books;
});

export const addBookAPI = createAsyncThunk(
  ADD_BOOK_API,
  async (payload, thunkAPI) => {
    await axios.post(URL, payload);
    return thunkAPI.dispatch(getAllBooks());
  },
);

export const removeBookAPI = createAsyncThunk(
  REMOVE_BOOK_API,
  async (payload, thunkAPI) => {
    await axios.delete(`${URL}/${payload}`);
    return thunkAPI.dispatch(getAllBooks());
  },
);

const bookstoringapi = createSlice({
  name: 'booksRedcuer',
  initialState,
  reducers: {},
  extraReducers: {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    [getAllBooks.pending]: (state) => {
      state.loading = true;
    },
    [getAllBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [getAllBooks.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default bookstoringapi.reducer;
