import React from 'react';

function getDate(today = new Date()) {
  const dateISO = today.toISOString().slice(0, 10);
  const dateLocaleString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <time dateTime={dateISO} data-cy="date">
      {dateLocaleString}
    </time>
  );
}

export const Article = ({
  title,
  date,
  text,
}) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      {getDate(date)}
    </p>

    <p data-cy="text">
      {text}
    </p>
  </div>
);
