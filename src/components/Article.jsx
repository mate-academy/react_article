import React from 'react';
import './Article.css';

export const Article = ({ title, date, text }) => {
  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={date} data-cy="date">
          {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};
