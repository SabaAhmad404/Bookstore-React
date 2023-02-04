const ADD_BOOK = 'redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/REMOVE_BOOK';
const initialState = {
  Books: [],
};
export const Addbooks = (books) => ({
  type: ADD_BOOK,
  text: books,
});
export const removeBooks = (books) => ({
  type: REMOVE_BOOK,
  text: books,
});
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        state,
        Books: [state.Books, action.text],
      };
    case REMOVE_BOOK:
      return {
        state,
        Books: state.Books.filter((B) => B !== action.text),
      };
    default:
      return state;
  }
}
