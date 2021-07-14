import React from 'react';
import propTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Article;
