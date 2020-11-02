import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.defaultProps = {
  title: 'title',
  text: 'text',
  date: 'date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
