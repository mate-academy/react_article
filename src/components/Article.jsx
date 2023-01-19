import React from 'react';

function Article({ title, date, text }) {
  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={date} data-cy="date">
          {date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
}

export default Article;
