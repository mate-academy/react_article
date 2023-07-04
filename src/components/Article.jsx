import React from 'react';

export const Article = ({
  title,
  date,
  dateLocale,
  text,
}) => (
  <>
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={date} data-cy="date">
        {dateLocale}
      </time>
    </p>

    <p data-cy="text">
      {text}
    </p>
  </>
);
