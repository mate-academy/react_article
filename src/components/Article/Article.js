import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </div>
);

Article.defaultProps = {
  title: 'Title',
  text: 'Text',
  date: 'Date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
