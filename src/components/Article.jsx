import React from 'react';
import propTypes from 'prop-types';

export const Article = ({ title, date, text }) => {
  const dateISO = date.toISOString().slice(0, 10);
  const dateLocaleString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="box">
      <h2 className="title" data-cy="title">
        {title}
      </h2>

      <p className="subtitle">
        <time dateTime={dateISO} data-cy="date">
          {dateLocaleString}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};

Article.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};
