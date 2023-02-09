import React from 'react';

export const Article = ({
  title,
  date,
  text,
}) => {
  const articleDate = new Date(date);
  const dateISO = articleDate.toISOString().slice(0, 10);
  const dateLocaleString = articleDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <div className="box">
        <h2 className="title" data-cy="title">
          {title}
        </h2>

        <p className="subtitle">
          <time dateTime={dateISO} data-cy="date">
            {dateLocaleString}
          </time>
        </p>

        <p data-cy="text">
          {text}
        </p>
      </div>
    </>
  );
};
