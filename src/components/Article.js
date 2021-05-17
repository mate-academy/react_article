import React from 'react';
import propTypes from 'prop-types';

import '../App.scss';

const Article = ({ title, text, date }) => (
  <section>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </section>
);

Article.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};

export default Article;
