import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  text = 'No description yet',
  date = new Date().toDateString(),
}) => (
  <div className="article">
    <div className="article-heading">
      <h1 className="article__title">{title}</h1>
      <span className="article__date">{date}</span>
    </div>
    <p className="article__description">{text}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
