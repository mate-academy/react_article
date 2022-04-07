import React from 'react';

export const Article = (props) => {
  const {
    title,
    date,
    text,
  } = props;

  return (
    <article>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </article>
  );
};
