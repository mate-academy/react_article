import React from 'react';
import PropTypes from 'prop-types';

export function Article({
  title,
  date,
  text,
}) {
  return (
    <article className="article">
      <h1 className="article__title">
        {title}
      </h1>
      <span className="article__date">
        {date}
      </span>
      <p className="article__text">
        {text}
      </p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Article.defaultProps = {
  date: 'January 1, 1900',
};
