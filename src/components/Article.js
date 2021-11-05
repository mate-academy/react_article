import React from 'react';
import PropTypes from 'prop-types';

function Article({ article }) {
  const { title, text, date } = article;

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </React.Fragment>
  );
}

export default Article;

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};
