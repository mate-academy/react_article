import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

function Article({ title, date, text }) {
  return (
    <article className="article">
      <h2 className="article-title">{title}</h2>
      <hr />
      <p className="article-text">{text}</p>
      <span className="article-date">
        Added:
        {date}
      </span>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
