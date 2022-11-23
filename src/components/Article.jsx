import PropTypes from 'prop-types';
import React from 'react';

export const Article = ({
  article,
}) => {
  const { date, title, text } = article;
  const dateISO = date.toISOString().slice(0, 10);
  const dateLocaleString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="container">
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

Article.defaultProps = {
  date: '',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
};
