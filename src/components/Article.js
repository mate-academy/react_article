import React from 'react';
import propTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <section>
    <h1>{title}</h1>
    <p>{text}</p>
    <time>{date}</time>
  </section>
);

Article.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Article;
