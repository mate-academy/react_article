import React from 'react';

function Article({ title,
  text,
  date }) {
  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>
      <time dateTime="2019-08-30" data-cy="date">
        {date.toISOString()}
      </time>
      <p data-cy="text">
        {text}
      </p>
    </div>
  );
}

export default Article;
