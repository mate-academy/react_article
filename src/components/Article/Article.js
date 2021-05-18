import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

const Article = ({ title, text, date }) => (
  <div className="article">
    <h1 className="article__title">{title}</h1>
    <span className="article__date">{date}</span>
    <p className="article__text">{text}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export { Article };
