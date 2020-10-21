import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  text,
  date,
}) => (
  <div className="Article">
    <h1>{title}</h1>
    <span>{text}</span>
    <p>{date}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
