import React from 'react';

export const Article = ({
  title,
  text,
  date,
}) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);
