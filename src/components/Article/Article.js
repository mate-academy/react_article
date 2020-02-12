import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ article }) => {
  const { title, text, date } = article;

  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};
