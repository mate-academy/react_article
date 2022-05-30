import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ propsOfArticle }) => {
  const {
    title,
    date,
    text,
  } = propsOfArticle;

  return (
    <article>
      <h1>{ title }</h1>
      <span>{ date }</span>
      <p>{ text }</p>
    </article>
  );
};

Article.defaultProps = {
  propsOfArticle: {
    title: '',
    date: '',
    text: '',
  },
};

Article.propTypes = {
  propsOfArticle: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
