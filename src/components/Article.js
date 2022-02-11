import PropTypes from 'prop-types';
import React from 'react';

export const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'Enter the title',
  date: 'Enter the date',
  text: 'Enter the text',
};

Article.propsTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
