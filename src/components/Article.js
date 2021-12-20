import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <div className="article">
    <h1 className="articleTitle">{title}</h1>
    <p className="articleText">{text}</p>
    <span className="articleDate">{date}</span>
  </div>
);

Article.defaultProps = {
  title: 'No title',
  text: 'Text unavailable',
  date: new Date().toLocaleDateString(),
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
