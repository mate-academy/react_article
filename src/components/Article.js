import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'How React isn\'t reactive, and why you shouldn\'t care',
  text: 'If the title agrees with you, you can stop reading right now.',
  date: 'March 23, 2021',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
