import React from 'react';

export const Article = ({ title, data, text }) => (
  <>
    <h1>{title}</h1>
    <span>{data}</span>
    <p>{text}</p>
  </>
);
