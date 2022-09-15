import React from 'react';

const today = new Date();
const dateISO = today.toISOString().slice(0, 10);

export const Article = ({ title, text, date }) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={dateISO} data-cy="date">
        {date}
      </time>
    </p>

    <p data-cy="text">
      {text}
    </p>
  </div>
);
