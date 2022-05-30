import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ props }) => {
  const {
    title,
    text,
    date,
  } = props;

  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </>
  );
};

Article.propType = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
