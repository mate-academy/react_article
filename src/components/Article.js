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
  title: 'Title is undefined',
  text: 'Text is undefined',
  date: 'Date is undefined',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
