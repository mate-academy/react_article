
import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, data, text }) => (
  <>
    <h1>{title}</h1>
    <span>{data}</span>
    <p>{text}</p>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
