import React from 'react';
import './App.scss';

function Article(props) {
  return (
    <>
      <h1 className="title">{props.title}</h1>
      <p className="text">{props.text}</p>
      <span className="date">{props.date}</span>
    </>
  );
}

export default Article;