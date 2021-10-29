import React from 'react';
import ArticleType from './proptypes';

Article.propTypes = ArticleType;

function Article(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <span>{props.date}</span>
      <p>{props.text}</p>
    </>
  );
}

export default Article;
