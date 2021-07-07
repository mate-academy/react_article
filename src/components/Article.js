import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ info = {} }) => {
  const { title, date, text } = info;

  return (
    <article>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </article>
  );
};

Article.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
