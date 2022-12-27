import React from 'react';

export const Article = ({
  title,
  date,
  text,
}) => {
  const dateTime = date.toISOString().slice(0, 10);
  const extractDate = date.toLocaleDateString('en-US', {
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
        <time dateTime={dateTime} data-cy="date">
          {extractDate}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};
