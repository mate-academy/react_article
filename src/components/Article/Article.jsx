import React from 'react';
import propTypes from 'prop-types';

export const Article = ({
  title,
  text,
  date,
}) => (
  <article>
    <h1>{title}</h1>

    <span>{date}</span>

    <p>{text}</p>
  </article>
);

Article.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};
