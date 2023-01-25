import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => {
  const today = new Date();
  const dateISO = today.toISOString().slice(0, 10);
  const dateLocaleString = today.toLocaleDateString('en-US', {
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

Article.defaultProps = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
