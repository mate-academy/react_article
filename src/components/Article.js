import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.isRequired,
};

export default Article;
