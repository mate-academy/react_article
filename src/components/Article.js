import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { title, date, text } = props.article;

  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Article;
