import React from 'react';

export const Article = ({ title, date, text }) => {
  const today = new Date(date);
  const dateISO = today.toISOString().slice(0, 10);
  const dateLocaleStrinf = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="Article">
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={dateISO} data-cy="date">
          {dateLocaleStrinf}
        </time>
      </p>

      <p data-cy="text">{text}</p>
    </div>
  );
};
