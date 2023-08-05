import React from 'react';

function Article({ title, date, text }) {
  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>
      <p className="subtitle">
        <time dateTime="2022-09-08" data-cy="date">
          {date}
        </time>
      </p>
      <p data-cy="text">
        {text}
      </p>
    </div>
  );
}

export default Article;
