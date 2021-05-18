import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => (
  <div>
    <h1>{article.title}</h1>
    <p>{article.text}</p>
    <span>{article.date}</span>
  </div>
);

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default Article;
