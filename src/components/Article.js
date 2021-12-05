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
  title: 'Some title',
  text: 'Some text',
  date: 'Some date',
};

Article.prototype = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
