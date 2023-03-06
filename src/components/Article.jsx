import React from 'react';

export const Article = function Article({ text, title, dateISO, dateString }) {
  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={dateISO} data-cy="date">
          {dateString}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};
