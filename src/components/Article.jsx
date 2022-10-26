import React from 'react';

export const Article = ({ title, date, text }) => {
  const currentDate = date
    .toISOString()
    .slice(0, 10);

  const currentDateString = date.toLocaleDateString(
    'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  );

  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={currentDate} data-cy="date">
          {currentDateString}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};
