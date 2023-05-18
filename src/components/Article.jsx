import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => {
  const dateISO = date.toISOString().slice(0, 10);
  const datetoLocaleString = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article>
      <div className="box">
        <h2 className="title" data-cy="title">
          {title}
        </h2>

        <p className="subtitle">
          <time dateTime={dateISO} data-cy="date">
            {datetoLocaleString}
          </time>
        </p>

        <p data-cy="text">{text}</p>
      </div>
    </article>
  );
};

Article.defaultProps = {
  title: '',
  date: '',
  text: '',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
