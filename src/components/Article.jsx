import React from 'react';

export const Article = ({ article }) => {
  const {
    title,
    date,
    text,
  } = article;

  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>
      <p className="subtitle">
        <time data-cy="date">
          {date}
        </time>
      </p>
      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};
