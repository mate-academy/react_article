import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, data }) => (
  <>
    <h1>{title}</h1>
    <span>{text}</span>
    <p>{data}</p>
  </>
);

Article.defaultProps = {
  title: 'Empty title',
  text: 'Empty title',
  data: 'Empty title',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  data: PropTypes.string,
};
