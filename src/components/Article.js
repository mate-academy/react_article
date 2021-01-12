import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  text,
  date,
}) => (
  <article className="article">
    <h1 className="article__title">{title}</h1>
    <p className="article__text">{text}</p>
    <span className="article__data">{date}</span>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
