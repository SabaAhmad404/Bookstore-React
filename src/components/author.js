import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/fetch';

function Title({
  Title, Author, Id, Category,
}) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBookAPI(Id));
  };
  return (
    <li>
      <div className="display">
        <div className="book-display">
          <div className="info">
            <h4 className="book-category">{Category}</h4>
            <h2 className="book-title">{Title}</h2>
            <h2 className="book-author">{Author}</h2>
            <div className="action">
              <button type="button" className="outline">
                Comments
              </button>
              <div className="divider" />
              <button type="button" className="outline" onClick={handleRemove}>
                Remove
              </button>
              <div className="divider" />
              <button type="button" className="outline">
                Edit
              </button>
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular" />
            </div>
            <div className="start">
              <p className="complete">77%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="chapter-container">
              <div>
                <p className="chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 7</p>
              </div>
              <div>
                <button className="updated-button" type="button">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Title;
Title.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
};
