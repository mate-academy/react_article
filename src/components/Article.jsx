import React from 'react';

function Article(props) {
  return (
    <>
      <h1>{props.article.title}</h1>
      <span>{props.article.date}</span>
      <p>{props.article.text}</p>
    </>
  );
}

export default Article;
