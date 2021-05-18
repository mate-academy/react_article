import React from 'react';
import propTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <div>
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
  title: propTypes.string,
  date: propTypes.string,
  text: propTypes.string,
};

export default Article;
