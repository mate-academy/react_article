import React from 'react';
// eslint-disable-next-line import/no-cycle
import { formatDate as format } from '../App';

export const Article = ({ title, date, text }) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>
    <p className="subtitle">
      <time dateTime={format(date).dateISO} data-cy="date">
        {format(date).dateLocaleString}
      </time>
    </p>
    <p data-cy="text">
      {text}
    </p>
  </div>
);
