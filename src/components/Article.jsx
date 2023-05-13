import React from 'react';

export const Article = ({ title, date, text }) => (
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

const getDate = (date) => {
  const dateISO = date.toISOString().slice(0, 10);
  const dateLocaleString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <time dateTime={dateISO} data-cy="date">
      {dateLocaleString}
    </time>
  );
};
