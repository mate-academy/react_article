import React from 'react';
import PropTypes from 'prop-types';

const Article = props => (
  <>
    <h1>{props.article.title}</h1>
    <span>{props.article.date}</span>
    <p>{props.article.text}</p>
  </>
);

Article.propType = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
