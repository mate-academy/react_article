import React from 'react';

export const Article = ({ title, date, text }) => {
  const formattedDateTime = date.toISOString().slice(0, 10);
  const formattedDate = date.toLocaleDateString('en-US', {
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
        <time dateTime={formattedDateTime} data-cy="date">
          {formattedDate}
        </time>
      </p>

      <p data-cy="text">{text}</p>
    </div>
  );
};
