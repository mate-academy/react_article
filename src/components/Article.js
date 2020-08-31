import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <span>{props.date}</span>
      <p>{props.text}</p>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
