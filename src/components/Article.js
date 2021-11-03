import React from 'react';
import PropType from 'prop-types';

export const Article = ({ title, date, text }) => (
  <article>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </article>
);

Article.propTypes = {
  title: PropType.string.isRequired,
  date: PropType.string.isRequired,
  text: PropType.string.isRequired,
};
