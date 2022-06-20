import React from 'react';

function Article(props) {
  return (
    <h1>{props.title}</h1>,
      <span>
        {props.date}
      </span>,
      <p>{props.text}</p>
  );
}

export default Article;
