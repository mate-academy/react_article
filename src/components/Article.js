import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, text, date }) {
  return (
    <article>
      <h1>{title}</h1>
      <span>{text}</span>
      <p>{date}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
