import React from 'react';
import PropTypes from 'prop-types';

import '../App.scss';

export const Article = ({ title, date, text }) => (
  <div className="container container__wrapper">
    <article className="article article__wrapper">
      <h1 className="article__title">
        {title}
      </h1>
      <p className="article__text">
        {text}
      </p>
      <span className="article__date">
        {date}
      </span>
    </article>
  </div>
);

Article.defaultProps = {
  title: 'Someday we will come up with a title',
  date: new Date().toLocaleDateString(),
  text: 'Not today',
};

Article.potoTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
