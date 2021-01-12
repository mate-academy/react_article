import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <div>
    <h2>{title}</h2>
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
