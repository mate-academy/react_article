import React from 'react';
import propTypes from 'prop-types';

import './Article.scss';

const Article = ({ title, date, text }) => (
  <article className="article">
    <h1 className="article__header">{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string,
  text: propTypes.string,
};

Article.defaultProps = {
  date: '',
  text: 'Article text not found',
};

export default Article;
