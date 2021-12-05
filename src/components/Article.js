import React from 'react';
import PropTypes from 'prop-types';

import '../App.scss';

export const Article = ({ title, date, text }) => (
  <div className="article article__wrapper">
    <div className="article article__section">
      <h1 className="article__title">
        { title }
      </h1>
      <p className="article__text">
        { text }
      </p>
      <span className="article__date">
        { date }
      </span>
    </div>
  </div>
);

Article.defaultProps = {
  title: 'Don\'t have any news yet',
  text: null,
  date: new Date().toLocaleDateString(),
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
