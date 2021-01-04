import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <div className="container">
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
