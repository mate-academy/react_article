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
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

Article.defaultProps = {
  article: {},
};

export default Article;
