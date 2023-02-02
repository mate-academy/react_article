import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => {
  const setDate = date.toISOString().slice(0, 10);
  const readDate = date.toLocaleDateString('en-US', {
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
        <time dateTime={setDate} data-cy="date">
          {readDate }
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
