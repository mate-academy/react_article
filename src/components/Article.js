import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => (
  <>
    <h1>{article.title}</h1>
    <span>{article.date}</span>
    <p>{article.text}</p>
  </>
);

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
