import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ title, date, text }) => (
  <div className="article">
    <h1 className="article__title">{title}</h1>
    <p className="article__date">{date}</p>
    <p className="article__paragraph">{text}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
