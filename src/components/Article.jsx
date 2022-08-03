import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <div className="App">
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </div>
);

Article.defaultProps = {
  title: 'Article',
  date: 'Jun 01, 1900',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit velit!',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
