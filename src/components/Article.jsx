import React from 'react';

export const Article = props => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {props.title}
    </h2>

    <p className="subtitle">
      <time dateTime={props.datetime} data-cy="date">
        {props.date}
      </time>
    </p>

    <p data-cy="text">
      {props.text}
    </p>
  </div>
);
