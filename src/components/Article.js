import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <span>{props.date}</span>
      <p>{props.text}</p>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
