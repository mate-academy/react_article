import React from 'react';
import Proptypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.propTypes = {
  title: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired,
};

export default Article;
