import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, data, text }) => (
  <>
    <h1>{title}</h1>
    <span>{data}</span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'How React isn\'t reactive, and why you shouldn\'t care',
  text: 'If the title agrees with you, you can stop reading right now.',
  data: 'March 23, 2021',
};

Article.propTypes = {
  title: PropTypes.string,
  data: PropTypes.string,
  text: PropTypes.string,
};
