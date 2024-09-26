import React from 'react';

export const Article = ({ article }) => {
  const dateISOFA = article.date.toISOString().slice(0, 10);
  const dateLocaleStringFA = article.date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {article.title}
      </h2>

      <p className="subtitle">
        <time dateTime={dateISOFA} data-cy="date">
          {dateLocaleStringFA}
        </time>
      </p>

      <p data-cy="text">
        {article.text}
      </p>
    </div>
  );
};
