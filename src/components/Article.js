import React from 'react';
import '../App.scss';

export const Article = ({ title, date, text }) => (
  <>
    <h1 className="content__title">{title}</h1>
    <p className="content__block">{text}</p>
    <span className="content__date">{date}</span>
  </>
);
