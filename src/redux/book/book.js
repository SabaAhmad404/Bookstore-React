const ADD_BOOK = 'redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/REMOVE_BOOK';
const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    genres: 'Action',
    author: 'Suzanne Collins',
    progres: 64,
    chapter: 'Chapter 17: "A Lesson Learned"',
  },
  {
    id: 2,
    title: 'Dune',
    genres: 'Fantasy',
    author: 'Frank Herbert',
    progres: 8,
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    genres: 'Economics',
    author: 'Suzanne Collins',
    progres: 0,
    chapter: 'Introduction: "A Lesson Learned"',
  },
];

export const Addbooks = (books) => ({
  type: ADD_BOOK,
  payload: books,
});

export const removeBooks = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((B) => B.id !== action.payload);
    default:
      return state;
  }
}
