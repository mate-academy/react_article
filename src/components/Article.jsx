import React from 'react';

function Article(props) {
  return (
    <>
      <h1>{props.content.title}</h1>
      <span>{props.content.date}</span>
      <p>{props.content.text}</p>
    </>
  );
}

export default Article;
