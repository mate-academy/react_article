import React from 'react';

export const Article = ({
  title,
  date,
  text,
}) => {
  const localDateString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dateIso = date.toISOString().slice(0, 10);

  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={dateIso} data-cy="date">
          {localDateString}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};
