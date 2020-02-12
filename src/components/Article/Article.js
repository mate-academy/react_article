import React from 'react';
import PropTypes from 'prop-types';
import style from './Article.module.css';

function Article({ title, text, date }) {
  return (
    <article className={style.article}>
      <h1 className={style.title}>{title}</h1>
      <p>{text}</p>
      <span className={style.date}>{date}</span>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

Article.defaultProps = {
  title: '',
  text: '',
  date: '',
};

export default Article;
