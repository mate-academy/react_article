/* eslint-disable react/prop-types */
import React from 'react';

function Article({ title, text, date }) {
  return (
    <article>
      <h1>
        {title}
      </h1>
      <span>
        {date}
      </span>
      <p>
        {text}
      </p>
    </article>
  );
}

export default Article;
