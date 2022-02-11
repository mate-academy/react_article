import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </>
);

Article.defaultProps = {
  title: 'Title please!',
  text: 'Text please!',
  date: 'Date please!',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.number,
  date: PropTypes.number,
};

export default Article;
