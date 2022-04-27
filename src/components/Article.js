import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.defaultProps = {
  date: 'Date of writing is unknown',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
};
