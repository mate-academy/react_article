import React from 'react';

const Article = ({title, text, date}) => {
  return (
    <article>
      <h1>{`${title}`}</h1>
      <span>{`${text}`}</span>
      <p>{`${date}`}</p>
    </article>
  )
};

export default Article;
