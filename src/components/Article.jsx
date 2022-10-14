import React from 'react';

export const Article = ({ title, date, text }) => {
  const dateString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dateTimeString = date.toISOString().slice(0, 10);

  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        { title }
      </h2>

      <p className="subtitle">
        <time
          dateTime={dateTimeString}
          data-cy="date"
        >
          { dateString }
        </time>
      </p>

      <p data-cy="text">
        { text }
      </p>
    </div>
  );
};
