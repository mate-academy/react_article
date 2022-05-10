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
  title: 'Some title!',
  date: 'Some date!',
  text: 'Some text!',
};

// eslint-disable-next-line
Article.PropTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
