import React from 'react';

const Article = (prop) => {
  const { title, date, text } = prop.article;

  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
};

export default Article;
