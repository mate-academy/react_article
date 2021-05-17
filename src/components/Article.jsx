import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

function Article({ title, text, date }) {
  return (
    <div className="article">
      <h1 className="article__title">{title}</h1>
      <hr />
      <span className="article__date">{date}</span>
      <hr />
      <p className="article__text">{text}</p>
      <hr />
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
