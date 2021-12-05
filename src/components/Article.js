import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <React.Fragment>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </React.Fragment>
);

Article.defaultProps = {
  title: 'Article title',
  date: Date(),
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string.isRequired,
};
