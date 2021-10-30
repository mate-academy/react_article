import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

export const Article = ({
  title,
  date,
  text,
}) => (
  <div className="article">
    <h1 className="article_title">
      {title}
    </h1>
    <span className="article_date">
      {date}
    </span>
    <p className="article_text">
      {text}
    </p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
