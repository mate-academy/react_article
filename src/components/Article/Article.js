import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  return (
    <>
      <h1>{props.article.title}</h1>
      <span>{props.article.date}</span>
      <p>{props.article.text}</p>
    </>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Article;
