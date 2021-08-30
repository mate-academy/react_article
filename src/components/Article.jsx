import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ myArticle }) => {
  const {
    title,
    text,
    date,
  } = myArticle;

  return (
    <main>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </main>
  );
};

Article.propTypes = {
  myArticle: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};
