import React from 'react';

function Article({ title, date = new Date(), text }) {
  const dateISO = date.toISOString().slice(0, 10);
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

      <time dateTime={dateISO} data-cy="date">
        {dateLocaleString}
      </time>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
}

export default Article;
