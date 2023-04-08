import React from 'react';

export const Article = ({ title, date, text }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={date} data-cy="date">
          {formattedDate}
        </time>
      </p>

      <p data-cy="text">{text}</p>
    </>
  );
};
