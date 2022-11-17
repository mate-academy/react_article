import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ ...firstArticle }) => {
  const { title, text, date } = firstArticle;
  const dateTime = date.toISOString().slice(0, 10);
  const toLocaleDateString = date.toLocaleDateString('en-US', {
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
        <time
          dateTime={dateTime}
          data-cy="date"
        >
          {toLocaleDateString}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  );
};

Article.defaultProps = {
  title: 'Title',
  date: 'date',
  text: 'text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  text: PropTypes.string,
};
