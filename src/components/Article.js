import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <article className="Article">
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </article>
);

Article.defaultProps = {
  title: 'Here must be a title',
  text: 'Here must be a text content',
  date: 'Here must be a date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
