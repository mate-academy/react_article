import React from 'react';

export const Article = (props) => {
  const { title, date, text } = props;
  const isoDate = date.toISOString().slice(0, 10);
  const dateLocaleString = date.toLocaleDateString('en-US', {
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
        <time dateTime={isoDate} data-cy="date">
          {dateLocaleString}
        </time>
      </p>
      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};
