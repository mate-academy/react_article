import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

export function Article(props) {
  const { title, date, text } = props.myProps;

  return (
    <div className="article">
      <h1 className="article_heading">{title}</h1>
      <span className="article_date">{date}</span>
      <p className="article_content">{text}</p>
    </div>
  );
}

Article.propTypes = {
  myProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
