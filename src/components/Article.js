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
  title: 'Sensation!',
  date: 'Once upon a time',
  text: 'Bla bla bla...',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
