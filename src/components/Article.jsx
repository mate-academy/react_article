import React from 'react';

export const Article = ({
  title = 'Title',
  date = new Date(),
  text = 'Description',
}) => {
  const dateISO = date.toISOString().slice(0, 10);
  const dateLocaleString = date.toLocaleDateString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });

  return (
    <article className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>
      <time dateTime={dateISO} data-cy="date">
        {dateLocaleString}
      </time>
      <p data-cy="text">
        {text}
      </p>
    </article>
  );
};
