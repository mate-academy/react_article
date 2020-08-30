import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <div className="container">
    <h1 className="title">{title}</h1>
    <span className="date">{date}</span>
    <p className="text">{text}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
