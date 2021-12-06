import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <article className="article article__wrapper">
    <h1 className="article__title">{title}</h1>
    <p className="article__paragraph">{text}</p>
    <span className="article__date">{date}</span>
  </article>
);

const date = new Date();

Article.defaultProps = {
  title: 'Title',
  text: 'Paragraph',
  date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`,
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export { Article };
