import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article: { title, text, date } }) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.defaultProps = {
  article: {},
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default Article;
