import React from 'react';
import './Article.scss';

export const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span className="article__date">{date}</span>
    <p>{text}</p>
  </>
);
