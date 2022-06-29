import React from 'react';
import './Article.scss';

export const Article = ({ title, date, text }) => (
  <div className="wrapper">
    <article className="article">
      <h1 className="article__title">{title}</h1>
      <span className="article__date">{date}</span>
      <p className="article__text">{text}</p>
    </article>
  </div>
);
