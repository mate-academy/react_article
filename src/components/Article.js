import React from 'react';
import PropTypes from 'prop-types';

import './Article.scss';

const Article = ({ title, date, text }) => (
  <div className="article">
    <div className="article__content">
      <h1 className="article__title">{title}</h1>
      <span className="article__date">{date}</span>
      <p className="article__text">{text}</p>
    </div>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
