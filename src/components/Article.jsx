import React from 'react';

export const Article = ({
  title,
  date,
  text,
}) => {
  const showDate = date.toLocaleDateString('en-US', {
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
        <time dateTime={date.toISOString().slice(0, 10)} data-cy="date">
          {showDate}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};
