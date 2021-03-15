import React from 'react';
import PropTypes from 'prop-types';
import './ArticleStyle.css';

const Article = ({
  title,
  date,
  text,
}) => (
  <div className="article-class">
    <h1>{ title }</h1>
    <span>{ date }</span>
    <p>{ text }</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string,
};

Article.defaultProps = {
  text: 'There is not any text',
};

export default Article;
