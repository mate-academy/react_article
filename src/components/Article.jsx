import React from 'react';

const Article = ({ title, text, date }) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>
    <time dateTime="2019-08-30" data-cy="date">
      {date.toLocaleDateString('en-US', { year: 'numeric',
        month: 'long',
        day: 'numeric' })}
    </time>
    <p data-cy="text">
      {text}
    </p>
  </div>
);

export default Article;
