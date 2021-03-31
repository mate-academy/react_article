import React from 'react';
import PropTypes from 'prop-types';

import './article.scss';

const Article = ({ title, date, text }) => (
  <div className="block">
    <h1 className="block__title">
      {title}
    </h1>
    <span className="block__date">
      {date}
    </span>
    <p className="block__text">
      {text}
    </p>
  </div>
);

Article.defaultProps = {
  title: '',
  date: '',
  text: '',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export { Article };
