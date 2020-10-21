import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <article className="card bg-light">
    <h1 className="card-header">{title}</h1>
    <span className="card-body card-title">{date}</span>
    <p className="card-body card-text">{text}</p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
