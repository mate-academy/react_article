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
  title: 'No article here',
  date: 'No date here',
  text: 'No text here',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  text: PropTypes.number,
};

export default Article;
