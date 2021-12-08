import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <div className="article">
    <h1 className="article__title">{title}</h1>
    <p className="article__text">{text}</p>
    <span className="article__date">{date}</span>
  </div>
);

Article.defaultProps = {
  title: 'No news',
  text: '',
  date: new Date().toLocaleDateString(),
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
