import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

const Article = ({ title, text, date }) => (
  <div className="article container">
    <h1 className="article-title">{title}</h1>
    <span className="article-date">{date}</span>
    <p className="article-text">{text}</p>
  </div>
);

Article.defaultProps = {
  title: 'No title',
  text: 'No text',
  date: 'No date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
