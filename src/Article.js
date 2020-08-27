import React from 'react';
import PropTypes from 'prop-types';

const Article = props => (
  <>
    <h1>{props.title}</h1>
    <span>{props.text}</span>
    <p>{props.date}</p>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
