import React from 'react';

const Article = ({ title, text, date }) => {
  
  return (
    <>
      <h1>{title}</h1>
      <span>{text}</span>
      <p>{date}</p>
    </>
  );
};

export default Article;
