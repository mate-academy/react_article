import React from 'react';
import '../App.scss';

const Article = ({ title, text, date }) => (
  <div className="article">
    <h1 className="article__title">{title}</h1>
    <p className="article__text">{text}</p>
    <span className="article__date">{date}</span>
  </div>
);

export default Article;
