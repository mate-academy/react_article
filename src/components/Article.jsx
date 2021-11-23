import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

export const Article = ({ title, image, text, date }) => (
  <article className="article">
    <img className="article__image" src={image} alt="React" />

    <div className="article__content">
      <h1 className="article__title">{title}</h1>
      <span className="article__date">{date}</span>
      <p className="article__text">{text}</p>
    </div>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
};

Article.defaultProps = {
  date: new Date().toLocaleDateString(),
};
