import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'No Title',
  text: 'No Text',
  date: 'No Date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
