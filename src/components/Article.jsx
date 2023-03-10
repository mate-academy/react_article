import React from 'react';

export const Article = ({
  title,
  date,
  text,
}) => {
  const dateStringUsaFormat = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dateDigitsCanadaFormat = date.toLocaleDateString('en-CA');

  return (
    <article>
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={dateDigitsCanadaFormat} data-cy="date">
          {dateStringUsaFormat}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </article>
  );
};
