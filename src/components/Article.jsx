import React from 'react';

const formatDate = (date) => {
  const today = new Date(date);
  const dateISO = today.toISOString().slice(0, 10);
  const dateLocaleString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    dateISO,
    dateLocaleString,
  };
};

export const Article = (props) => {
  const {
    title,
    date,
    text,
  } = props;

  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>
      <p className="subtitle">
        <time dateTime={formatDate(date).dateISO} data-cy="date">
          {formatDate(date).dateLocaleString}
        </time>
      </p>
      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};
