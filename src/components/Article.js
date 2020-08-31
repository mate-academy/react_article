import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.propTypes = {
  title: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
