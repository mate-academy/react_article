import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

const Article = ({
  title,
  text,
  date,
}) => (
  <div className="article">
    <h1 className="article__title">{title}</h1>
    <p className="article__text">{text}</p>
    <span className="article__publication-date">{date}</span>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export { Article };
