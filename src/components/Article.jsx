import React from 'react';
import PropsTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <article>
    <h1>{title}</h1>
    <p>{date}</p>
    <span>{text}</span>
  </article>
);

Article.propsTypes = {
  title: PropsTypes.string.isRequired,
  date: PropsTypes.string.isRequired,
  text: PropsTypes.string.isRequired,
};

export default Article;
