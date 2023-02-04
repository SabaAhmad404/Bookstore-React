import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookstoringapi from './fetch';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  books: bookstoringapi,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer,
});

export default store;
