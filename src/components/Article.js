import React from 'react';
import PropTypes from 'prop-types';

function Article({ title }) {
  return (
    <article>
      <h1>{title.title}</h1>
      <span>{title.date}</span>
      <p>{title.text}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
