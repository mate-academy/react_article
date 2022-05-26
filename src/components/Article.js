import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'Article',
  date: String(new Date()),
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
};
