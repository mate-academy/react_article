import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

const Article = ({ title, date, text }) => (
  <article className="article">
    <h1 className="article__title">{title}</h1>
    <span className="article__date">{date}</span>
    <p className="article__text">{text}</p>
  </article>
);

Article.defaultProps = {
  date: 'recently',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Article;
