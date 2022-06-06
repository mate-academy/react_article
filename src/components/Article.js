import React from 'react';
import PropTypes from 'prop-types';

const Article = props => (
  <>
    <h1>{props.article.title}</h1>
    <p>{props.article.text}</p>
    <span>{props.article.date}</span>
  </>
);

Article.propType = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
