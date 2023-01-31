/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  const { title, author } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
    </div>
  );
}
export { Title as default };
Title.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
