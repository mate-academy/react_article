import React from 'react';
import PropTypes from 'prop-types';

import '../App.scss';

export const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <p>{date}</p>
    <span>{text}</span>
  </>
);

Article.defaultProps = {
  title: 'No title',
  date: new Date(),
  text: 'No text',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
