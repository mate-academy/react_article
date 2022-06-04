import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

Article.defaultProps = {
  title: 'Title',
  date: String(new Date()),
  text: 'Some text',
};

export default Article;
