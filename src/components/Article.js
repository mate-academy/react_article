import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'Data is not found',
  date: 'Unckdown date',
  text: 'Text does not exist',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
