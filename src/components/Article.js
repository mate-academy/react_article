import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <article className="article">
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
