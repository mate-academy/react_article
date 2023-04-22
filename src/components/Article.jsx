import React from 'react';

export const Article = ({ title, date, text }) => {
  const today = date;
  const dateISO = today.toISOString().slice(0, 10);
  const dateLocaleString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="box">
      <h2 className="title" data-cy="title">{title}</h2>
      <time
        className="subtitle"
        dateTime={dateISO}
        data-cy="date"
      >
        {dateLocaleString}
      </time>
      <p data-cy="text">{text}</p>
    </article>
  );
};
