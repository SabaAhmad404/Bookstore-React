import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/fetch';

function Title({ Title, Author, id }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBookAPI(id));
  };
  return (
    <span className="title-container">
      <h1>{Title}</h1>
      <p>{Author}</p>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </span>
  );
}

export default Title;
Title.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
