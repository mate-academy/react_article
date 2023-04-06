import React from 'react';

export const Article = ({ props }) => {
  const dateISO = props.date.toISOString().slice(0, 10);
  const dateLocaleString = props.date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {props.title}
      </h2>

      <p className="subtitle">
        <time dateTime={dateISO} data-cy="date">
          {dateLocaleString}
        </time>
      </p>

      <p data-cy="text">
        {props.text}
      </p>
    </div>
  );
};
