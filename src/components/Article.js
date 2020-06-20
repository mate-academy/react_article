import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { title } = props.article;
  const { date } = props.article;
  const { text } = props.article;

  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
};

Article.propTypes = {
  article: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Article;
