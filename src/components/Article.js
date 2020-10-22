import React from 'react';
import propTypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <div>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </div>
  );
}

Article.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Article;
