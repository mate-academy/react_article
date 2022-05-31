import React from 'react';
import typeProps from 'prop-types';

const Article = ({ title, text, date }) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.typeProps = {
  title: typeProps.string,
  text: typeProps.string,
  date: typeProps.string,
};

Article.defaultProps = {
  title: 'Title',
  text: 'Some text',
  date: String(new Date()),
};

export default Article;
