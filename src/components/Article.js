import React from 'react';
import propTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </>
);

Article.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};

export default Article;
