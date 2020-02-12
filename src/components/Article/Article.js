import React from 'react';
import PropTypes from 'prop-types';

export const Article = (props) => {
  const { article } = props;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.text}</p>
      <span>{article.date}</span>
    </>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};
