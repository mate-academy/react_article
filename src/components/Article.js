import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ article }) => {
  const {
    title,
    date,
    text,
  } = article;

  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
};

Article.defaultProps = {
  article: {
    title: 'No title added',
    date: 'No date added',
    text: 'No text added',
  },
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
  }),
};
