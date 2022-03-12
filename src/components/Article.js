import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const Article = ({
  title = 'No Name',
  text = 'No description',
  date = 'No information',
}) => (
  <div className="article">
    <h1 className="article__title">{title}</h1>
    <span className="article__date">{date}</span>
    <p className="article__description">{text}</p>
  </div>
);

Article.defaultProps = {
  title: 'No Name',
  text: 'No description',
  date: 'No information',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
