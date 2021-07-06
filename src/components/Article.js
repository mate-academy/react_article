import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <div>
    <h1>{title}</h1>
    <date>{date}</date>
    <p>{text}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
