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
  title: 'No title',
  text: 'No Text',
  date: 'No Date',
};

Article.propTypes = {
  title: PropTypes.number,
  text: PropTypes.number,
  date: PropTypes.string,
};
