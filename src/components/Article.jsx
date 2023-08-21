import React from 'react';

const locale = 'en-US';
const opts = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const Article = ({ title, date, text }) => {
  const theDate = date.toLocaleDateString(locale, opts);
  const dateISO = date.toISOString().slice(0, 10);

  return (
    <>
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={dateISO} data-cy="date">
          {theDate}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </>
  );
};
