import React from 'react';

export const Article = ({ article }) => {
  const { title, date, text } = article;

  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
};
