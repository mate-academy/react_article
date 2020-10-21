import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <section>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </section>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
