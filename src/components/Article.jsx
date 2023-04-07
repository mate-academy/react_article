import React from 'react';

function dateFormat(date) {
  const dateISO = date.toISOString().slice(0, 10);
  const dateLocaleString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    dateISO,
    dateLocaleString,
  };
}

export const Article = ({ title, date, text }) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={dateFormat(date).dateISO} data-cy="date">
        {dateFormat(date).dateLocaleString}
      </time>
    </p>

    <p data-cy="text">
      {text}
    </p>
  </div>
);
