import React from 'react';
import { Subtitle } from './Subtitle';

export const Article = ({
  title,
  date,
  text,
}) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <Subtitle
      date={date}
    />
    <p data-cy="text">
      {text}
    </p>
  </div>
);
