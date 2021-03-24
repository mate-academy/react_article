import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

const Article = ({
  title,
  date,
  text,
}) => (
  <div className="wrapper">
    <h1 className="wrapper__title">{title}</h1>
    <span className="wrapper__date">{date}</span>
    <p className="wrapper__paragraph">{text}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
