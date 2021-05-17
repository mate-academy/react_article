import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <section className="article">
    <div className="article__wrapper">
      <h1 className="article__title">{title}</h1>
      <p className="article__text">{text}</p>
      <span className="article__date">{date}</span>
    </div>
  </section>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
