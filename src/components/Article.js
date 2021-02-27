import React from 'react';
import PropTypes from 'prop-types';

const Article = props => (
  <div>
    <h1>{props.title}</h1>
    <span>{props.date}</span>
    <p>{props.text}</p>
  </div>
);

export { Article };

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
