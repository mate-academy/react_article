import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const Article = ({ article: { title, date, text } }) => (
  <>
    <h1 className="article__title">{title}</h1>
    <span className="article__date">{date}</span>
    <p className="article__text">{text}</p>
  </>
);

Article.defaultProps = {
  date: 'No date',
  text: 'No information',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string,
};
