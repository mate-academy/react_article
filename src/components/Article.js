import React from 'react';
import PropTypes, { shape } from 'prop-types';

function Article({ article }) {
  const { title, date, text } = article;

  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
}

Article.propTypes = {
  article: shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
