import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <div className="article">
    <h1 className="article__title">{title}</h1>
    <span className="article__date">{date}</span>
    <p className="article__text">{text}</p>
  </div>
);

Article.defaultProps = {
  title: 'Here will be a new article',
  date: new Date().toLocaleDateString(),
  text: 'Please, check later',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  text: PropTypes.number,
};

export default Article;
