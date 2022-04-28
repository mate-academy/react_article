import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <article>
    <h1>{title}</h1>
    <span>{text}</span>
    <p>{date}</p>
  </article>
);

Article.defaultProps = {
  title: 'Empty title',
  text: 'Empty title',
  date: 'Empty title',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
