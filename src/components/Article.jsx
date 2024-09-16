import React from 'react';

export const Article = ({ title, date, text }) => {
  const newDate = date.toISOString().slice(0, 10);
  const newDateString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={newDate} data-cy="date">
          {newDateString}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};
