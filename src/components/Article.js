import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

Article.defaultProps = {
  title: 'No title',
  date: 'No date',
  text: 'No text',
};

export default Article;
