import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ firstArticle }) => {
  const { title, date, text } = firstArticle;
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

Article.defaultProps = {
  firstArticle: {
    date: null,
    text: '',
  },
};

Article.propTypes = {
  firstArticle: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.number,
    text: PropTypes.string,
  }),
};
