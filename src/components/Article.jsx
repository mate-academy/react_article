import React from 'react';

export const Article = ({ title = '', date = '', text = new Date() }) => (
  <>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </>
);
