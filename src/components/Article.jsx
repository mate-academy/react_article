import React from 'react';
import './Article.scss';

export function Article({
  title,
  text,
  date,
}) {
  return (
    <>
      <h1 className="Article-title">{title}</h1>
      <span className="Article-data">{date}</span>
      <p className="Article-text">{text}</p>
    </>
  );
}
