import React from 'react';
import propTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <article className="Article">
    <h1 className="Article__title">
      {title}
    </h1>
    <span className="Article__date">
      {date}
    </span>
    <p className="Article__text">
      {text}
    </p>
  </article>
);

Article.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Article;
