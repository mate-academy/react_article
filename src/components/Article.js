import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <div className="article">
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </div>
);

Article.defaultProps = {
  title: '',
  date: '',
  text: '',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
