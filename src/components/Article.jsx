import React from 'react';

export const Article = ({ title, date, text }) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={date} data-cy="date">
        {date}
      </time>
    </p>
    <p data-cy="text">
      {text}
    </p>
  </div>
);
