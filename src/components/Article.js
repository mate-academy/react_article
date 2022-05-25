import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </>
);

Article.defaultProps = {
  title: 'Add title',
  text: 'Add text',
  date: 'Add date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
