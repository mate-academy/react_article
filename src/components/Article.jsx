import React from 'react';
import './App.scss';

function Article({ 
  title,
  date,
  text
}) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p className="text">{text}</p>
      <span className="date">{date}</span>
    </>
  );
}

export default Article;
