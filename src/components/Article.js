import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

export const Article = ({
  title,
  date,
  text,
}) => (
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

Article.defaultProps = {
  title: 'New article',
  date: new Date().toLocaleDateString(),
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string.isRequired,
};
