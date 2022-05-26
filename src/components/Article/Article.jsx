import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <div className="article">
    <h1 className="article__title">{title}</h1>
    <span className="article__date">{date}</span>
    <p className="article__text">{text}</p>
  </div>
);

Article.defaultProps = {
  title: 'The title should be here',
  date: 'The date should be here',
  text: 'Some text should be here',
};

// eslint-disable-next-line react/no-typos
Article.PropTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
