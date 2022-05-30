import PropTypes from 'prop-types';
import React from 'react';

export const Article = ({
  title,
  date,
  text,
}) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.prototype = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
