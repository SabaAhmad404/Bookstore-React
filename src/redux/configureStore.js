import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Book/book';
import categoryReducer from './category/category';

const root = combineReducers({
  book: bookReducer,
  cate: categoryReducer,
});
const store = configureStore({ root });
export { store as default };
