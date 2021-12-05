import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

export const Article = ({
  title,
  text,
  date,
}) => (
  <acticle className="article">
    <span className="article__date">
      {date}
    </span>
    <h1 className="article__title">
      {title}
    </h1>
    <p className="article__text">
      {text}
    </p>
  </acticle>
);

Article.defaultProps = {
  title: 'no title',
  text: 'no text',
  date: 'no date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
