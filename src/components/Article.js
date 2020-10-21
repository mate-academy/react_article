import React from 'react';
import propTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <article className="article">
    <h1 className="article__title">
      {title}
    </h1>

    <p className="article__text">
      {text}
    </p>

    <span className="article__date">
      {date}
    </span>
  </article>
);

Article.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};
