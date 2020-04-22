import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ content }) => (
  <article>
    <h1>{content.title}</h1>
    <span>{content.date}</span>
    <p>{content.text}</p>
  </article>
);

Article.propTypes = {
  content: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Article;
