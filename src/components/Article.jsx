import React from 'react';

export const Article = ({ title, text, date }) => (
  <div>
    <h1 data-cy="title">
      {`${title}`}
    </h1>
    <span data-cy="date">
      {`${date}`}
    </span>
    <p data-cy="text">
      {`${text}`}
    </p>
  </div>
);
