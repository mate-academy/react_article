import React from 'react';
import { dateISO, dateLocaleString } from '../functions/getDate';

export const Article = ({
  title,
  date,
  text,
}) => (
  <article className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={dateISO(date)} data-cy="date">
        {dateLocaleString(date)}
      </time>
    </p>

    <p data-cy="text">
      {text}
    </p>
  </article>
);
