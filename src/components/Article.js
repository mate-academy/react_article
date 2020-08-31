import React from 'react';

import PropTypes from 'prop-types';

const Article = props => (
  <>
    <h1>{props.title}</h1>
    <span>{props.date}</span>
    <p>{props.text}</p>
  </>
);

Article.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Article;
