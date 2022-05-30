import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ article }) => {
  const {
    title,
    text,
    date,
  } = article;

  return (
    <article>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </article>
  );
};

Article.defaultProps = {
  article: {
    title: '',
    date: '',
    text: '',
  },
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};
