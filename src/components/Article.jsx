import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  date,
  text,
}) => (
  <div className="container">
    <h1 className="container__title">{title}</h1>
    <span className="container__span">{date}</span>
    <p className="container__text">{text}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
