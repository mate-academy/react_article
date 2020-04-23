import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ props }) => (
  <>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <span>{props.date}</span>
  </>
);

Article.propTypes = {
  props: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
