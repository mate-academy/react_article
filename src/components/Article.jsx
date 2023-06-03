import React from 'react';

function convertDateISO(date) {
  const dateISO = date.toISOString().slice(0, 10);

  return dateISO;
}

function convertDateLocaleString(date) {
  const dateLocaleString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return dateLocaleString;
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
      <time dateTime={convertDateISO(date)} data-cy="date">
        {convertDateLocaleString(date)}
      </time>
    </p>

    <p data-cy="text">
      {text}
    </p>
  </div>
);
