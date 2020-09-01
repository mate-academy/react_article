import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <>
      <h1>{title}</h1>
      <date>{date}</date>
      <p>{text}</p>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
