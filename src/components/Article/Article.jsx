import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <span>{text}</span>
    <p>{date}</p>
  </>
);

Article.defaultProps = {
  text: 'No text',
  date: 'No date',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  date: PropTypes.string,
};
