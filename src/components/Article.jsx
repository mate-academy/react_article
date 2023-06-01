import React from 'react';

export const Article = ({ article }) => {
  let today = new Date();

  today = article.date;
  const dateISOarticle = today.toISOString().slice(0, 10);
  const dateLocaleString = today.toLocaleDateString('en-US', {
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
        <time dateTime={dateISOarticle} data-cy="date">
          {dateLocaleString}
        </time>
      </p>
      <p data-cy="text">
        {article.text}
      </p>
    </div>
  );
};
