import React from 'react';
import './Article.scss';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <>
    <article className="article">
      <h1 className="article__title">{title}</h1>
      <span className="article__date">
        <i>{date}</i>
      </span>
      <p>{text}</p>
    </article>
  </>
);

Article.defaultProps = {
  date: new Date().getFullYear(),
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string.isRequired,
};
