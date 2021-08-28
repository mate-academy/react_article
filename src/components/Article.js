import React from 'react';
import PropTypes from 'prop-types';

import './Article.scss';

export const Article = ({
  title,
  text,
  date,
}) => (
  <section className="article">
    <h1 className="article__title">{title}</h1>
    <p className="article__text">{text}</p>
    <span className="article__date">{date}</span>
  </section>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
