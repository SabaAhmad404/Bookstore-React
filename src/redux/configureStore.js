import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './book/book';
import categoryReducer from './category/category';

const reducer = combineReducers({
  book: bookReducer,
  cate: categoryReducer,
});
const store = configureStore({
  reducer,
});
export default store;
