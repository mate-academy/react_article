import React from 'react';
import 'bulma/css/bulma.css';

export const Article = ({
  title,
  date,
  text,
}) => {
  const dateISO = date.toISOString()
    .slice(0, 10);

  const dateLocaleString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="section">
      <div className="container">
        <h1 className="title is-2">React Article</h1>

        {/* Add an <Article /> and pass `title`, `text` and `date` from the `article` object as props */}
        <div className="box">
          <h2 className="title" data-cy="title">
            {title}
          </h2>

          <p className="subtitle">
            <time dateTime={dateISO} data-cy="date">
              {dateLocaleString}
            </time>
          </p>

          <p data-cy="text">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
