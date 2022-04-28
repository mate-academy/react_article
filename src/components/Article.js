import React from 'react';
import PropsTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.PropsTypes = {
  title: PropsTypes.string.isRequired,
  text: PropsTypes.string.isRequired,
  date: PropsTypes.string.isRequired,
};
