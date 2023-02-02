/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/book/book';

function Title(props) {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const handleEvent = () => {
    dispatch(removeBooks(id));
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="submit" onClick={handleEvent}>
        Remove
      </button>
    </div>
  );
}
export { Title as default };
Title.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
