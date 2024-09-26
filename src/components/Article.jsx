import React from 'react';

export const Article = ({ title, date, text }) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={getDateISO(date)} data-cy="date">
        {getLocaleString(date)}
      </time>
    </p>

    <p data-cy="text">
      {text}
    </p>
  </div>
);

function getDateISO(date) {
  return date.toISOString().slice(0, 10);
}

function getLocaleString(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
