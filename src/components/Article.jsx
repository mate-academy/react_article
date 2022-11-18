import React from 'react';
// import { firstArticle } from '../App';

export const Article = ({
  title,
  dateISOFA,
  dateLocaleStringFA,
  text,
}) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={dateISOFA} data-cy="date">
        {dateLocaleStringFA}
      </time>
    </p>

    <p data-cy="text">
      {text}
    </p>
  </div>
);
