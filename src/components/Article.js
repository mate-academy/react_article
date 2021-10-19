import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ title, date, text }) => (
  <div className="article-wrap">
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
