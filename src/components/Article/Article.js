import React from 'react';
import PropTypes from 'prop-types';
import s from './Article.module.css';

function Article(props) {
  const { title, text, date } = props;

  return (
    <article className={s.article}>
      <h1 className={s.title}>{title}</h1>
      <p>{text}</p>
      <span className={s.date}>{date}</span>
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
