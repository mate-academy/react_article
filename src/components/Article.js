import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <>
    <h1 className="article__title">{title}</h1>
    <span className="article__date">{date}</span>
    <p className="article__text">{text}</p>
  </>
);

Article.defaultProps = {
  title: 'There must be some title',
  text: 'There must be some text',
  date: 'There must be date of publication',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
