import React from 'react';

export const Article = ({ title,
  text,
  date,
  dateISO = date.toISOString().slice(0, 10),
  dateLocaleString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) }) => (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>
      <time dateTime={dateISO} data-cy="date">
        {dateLocaleString}
      </time>
      <p data-cy="text">
        {text}
      </p>
    </div>
);
