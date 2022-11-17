import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title,
  text,
  date,
}) => {
  const today = date;

  const dateISO = today.toISOString()
    .slice(0, 10);

  const dateLocaleString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="container">
      <h1 className="title is-2">React Article</h1>

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
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
