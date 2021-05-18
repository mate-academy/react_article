import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <div className="Card">
    <h1 className="Card__title">
      {title}
    </h1>

    <span className="Card__date">
      {date}
    </span>

    <p className="Card__text">
      {text}
    </p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
