import React from 'react';

const today = new Date();

const dateISO = today.toISOString().slice(0, 10);

const dateLocaleString = today.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export const Article = ({ title, date, text }) => (
  <>
    <article>
      <p className="title" data-cy="title">{title}</p>
      <p dateTime={dateISO} className="subtitle" data-cy="date">
        {date.toISOString()}
      </p>
      <p>{dateLocaleString}</p>
      <p data-cy="text">{text}</p>
    </article>
  </>
);
