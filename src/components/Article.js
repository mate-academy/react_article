import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => (
  <>
    <h1>{article.title}</h1>
    <span>{article.date}</span>
    <p>{article.text}</p>
  </>
);

Article.defaultProps = {
  article: 'The topic is not found',
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default Article;
