import React from 'react';
import PropTypes from 'prop-types';

import './Article.scss';

export const Article = ({ title, text, date }) => (
  <>
    <h1 className="article__title">{title}</h1>
    <p className="article__text">{text}</p>
    <span className="article__date">{date}</span>
  </>
);

Article.defaultProps = {
  title: 'Title',
  date: 'Today',
  text: 'Fix',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
