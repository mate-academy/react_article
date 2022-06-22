import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <>
    <h2>{title}</h2>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
