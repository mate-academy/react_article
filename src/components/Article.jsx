import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title,
  date,
  text,
}) => {
  const today = new Date(date);
  const dateISO = today.toISOString().slice(0, 10);
  const dateLocaleString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="section">
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
    </div>
  );
};

Article.defaultProps = {
  title: 'Untitled',
  date: '2022-02-23',
  text: 'default Text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
