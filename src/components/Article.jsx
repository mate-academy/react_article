import React from 'react';
import { PropTypes } from 'prop-types';

export const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <span>{text}</span>
    <p>{date}</p>
  </>
);

Article.defaultProps = {
  title: 'Here should be your title',
  date: new Date(),
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
};
