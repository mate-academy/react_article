import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

// eslint-disable-next-line react/prop-types
const Article = ({ title, date, text }) => (
  <div className="Article">
    <h1 className="Article__title">{title}</h1>
    <span className="Article__date">{date}</span>
    <p className="Article__text">{text}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
