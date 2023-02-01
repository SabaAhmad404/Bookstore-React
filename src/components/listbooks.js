import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from './author';
import { removeBooks } from '../redux/book/book';
import Add from './form';
import '../styles/app.css';

function Store() {
  const Books = useSelector((state) => state.Books);
  const dispatch = useDispatch();
  const handleSubmit = (id) => {
    dispatch(removeBooks(id));
  };

  return (
    <div>
      <ul className="map-bar">
        {Books.map((book) => (
          <li className="container" key={book.id}>
            <Title title={book.title} author={book.author} />
            <button
              type="submit"
              onClick={() => {
                handleSubmit(book.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <Add />
    </div>
  );
}
export { Store as default };
