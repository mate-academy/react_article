import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <span>{props.date}</span>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
