import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

export const Article = ({ title, image, text, date }) => (
  <article className="article">
    <img className="article__image" src={image} alt="React" />

    <div className="article__content">
      <h1 className="article__title">{title}</h1>
      <div className="article__date">{date}</div>
      <p className="article__text">{text}</p>
    </div>
  </article>
);

Article.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

Article.defaultProps = {
  title: '',
  image: '',
  text: '',
  date: new Date().toLocaleDateString(),
};
