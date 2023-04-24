import React from 'react';

export const Article = ({ title, text, date }) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={date[0]} data-cy="date">
        {date[1]}
      </time>
    </p>

    <p data-cy="text">
      {text}
    </p>
  </div>
);
