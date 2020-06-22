import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

export { Article };

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
