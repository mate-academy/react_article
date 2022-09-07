// export const Article = () => ();
import React from 'react';

function dateISO(date) {
  return date.toISOString().slice(0, 10);
}

function dateLocaleString(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const Article = ({ title, date, text }) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={dateISO(date)} data-cy="date">
        {dateLocaleString(date)}
      </time>
    </p>

    <p data-cy="text">
      {text}
    </p>
  </div>
);
