import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <>
    <h1 className="root__title">{title}</h1>
    <span className="root__date">{date}</span>
    <p className="root__text">{text}</p>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export { Article };
