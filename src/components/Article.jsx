import React from 'react';
import PropTypes from 'prop-types';
import './article.scss';

const Article = ({ title, date, text }) => (
  <div className="wrapper">
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
