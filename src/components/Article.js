/* eslint-disable react/prop-types */
import React from 'react';

function Article(props) {
  return (
    <article>
      <h1>
        {props.article.title}
      </h1>
      <span>
        {props.article.date}
      </span>
      <p>
        {props.article.text}
      </p>
    </article>
  );
}

export default Article;
