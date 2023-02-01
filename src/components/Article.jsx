import React from 'react';

export const Article = ({ firstArticle, dateISO, dateLocaleString }) => (
  <>
    <div className="box">
      <h2 className="title" data-cy="title">
        {firstArticle.title}
      </h2>

      <p className="subtitle">
        <time dateTime={dateISO} data-cy="date">
          {dateLocaleString}
        </time>
      </p>

      <p data-cy="text">
        {firstArticle.text}
      </p>
    </div>
  </>
);
