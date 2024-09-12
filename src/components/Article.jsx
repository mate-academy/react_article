import React from 'react';

export const Article = (props) => {
  const today = props.date;
  const dateISO = today.toISOString().slice(0, 10);
  const dateLocaleString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="section">
      <div className="container">
        <h1 className="title is-2">React Article</h1>

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
      </div>
    </div>
  );
};
