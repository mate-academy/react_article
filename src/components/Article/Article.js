import React from 'react';
import PropTypes from 'prop-types';

import './Article.css';

export const Article = ({ title, date, text }) => (
  <article className="article">
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
