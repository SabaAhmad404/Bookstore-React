import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';

function Title({ title, author, id }) {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBooks(id));
  };
  return (
    <span className="book-display">
      <h1>{title}</h1>
      <h2> by </h2>
      <h1>{author}</h1>
      <button type="button" onClick={remove}>
        Remove
      </button>
    </span>
  );
}

export default Title;
Title.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
