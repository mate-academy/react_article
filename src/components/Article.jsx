import React from 'react';

export const Article = ({ title, text }) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>
    <time dateTime="2019-08-30" data-cy="date">
      September 8, 2023
    </time>
    <p data-cy="text">
      {text}
    </p>
  </div>
);

export default Article;
