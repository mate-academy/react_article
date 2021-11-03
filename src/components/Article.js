import React from 'react';
import PropTypes from 'prop-types';

const Article = props => (
  <article>
    <h1>{props.title}</h1>
    <span>{props.date}</span>
    <p>{props.text}</p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
