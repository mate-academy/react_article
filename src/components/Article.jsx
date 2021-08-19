import React from 'react';
import propTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <div className="article">
    <h1 className="article__title">
      {title}
    </h1>
    <span className="article__date">
      {date}
    </span>
    <p className="article__text">
      {text}
    </p>
  </div>
);

Article.defaultProps = {
  title: 'Title is not found',
  date: new Date(Date.now()).toDateString(),
  text: 'Paragraph not found',
};

Article.propTypes = {
  title: propTypes.string,
  date: propTypes.string,
  text: propTypes.string,
};

export default Article;
