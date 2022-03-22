import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ article }) => (
  <>
    <h1>{article.title}</h1>
    <span>{article.date}</span>
    <p>{article.text}</p>
  </>
);

Article.defaultProps = {
  date: 'date is undefined',
  text: 'there is no additional text',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string,
};
