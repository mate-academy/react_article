import React from 'react';
import 'bulma/css/bulma.css';
import { getDateISO, getLocaleDate } from '../functions/dateFormat';

export const Article = ({ title, date = new Date(), text }) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={getDateISO(date)} data-cy="date">
        {getLocaleDate(date)}
      </time>
    </p>

    <p data-cy="text">
      {text}
    </p>
  </div>
);
