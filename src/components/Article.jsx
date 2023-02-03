import React from 'react';

export const Article = ({ title, date, text }) => (
  <div className="section">
    <div className="container">
      <h1 className="title is-2">React Article</h1>

      <div className="box">
        <h2 className="title" data-cy="title">
          {title}
        </h2>

        <p className="subtitle">
          <time dateTime={date.toISOString().slice(0, 10)} data-cy="date">
            {date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </p>

        <p data-cy="text">{text}</p>
      </div>
    </div>
  </div>
);
