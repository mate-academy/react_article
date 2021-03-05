import PropTypes from 'prop-types';
import React from 'react';

function Article({ title, text, date }) {
  return (
    <>
      <h1>{title}</h1>
      <span>{text}</span>
      <p>{date}</p>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
