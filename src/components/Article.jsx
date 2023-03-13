import React from 'react';

export const Article = props => (
  <>
    <h2 className="title" data-cy="title">{props.title}</h2>

    <p className="subtitle">
      <time
        dateTime={new Date(props.date).toISOString().slice(0, 10)}
        data-cy="date"
      >
        {props.date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
    </p>

    <p data-cy="text">
      {props.text}
    </p>
  </>
);
