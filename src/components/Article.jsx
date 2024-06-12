import React from 'react';

function convertDateISO(date) {
  return date.toISOString().slice(0, 10);
}

function convertDateLocaleString(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const Article = ({ article }) => {
  const {
    title,
    date,
    text,
  } = article;

  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={convertDateISO(date)} data-cy="date">
          {convertDateLocaleString(date)}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};
