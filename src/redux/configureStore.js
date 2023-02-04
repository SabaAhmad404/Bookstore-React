import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book/book';
import categoryReducer from './category/category';

const root = combineReducers({
  book: bookReducer,
  cate: categoryReducer,
});
const store = configureStore({ root });
export { store as default };
