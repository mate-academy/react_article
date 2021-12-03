import React from 'react';
import PropTypes from 'prop-types';
import style from './Article.module.css';

const Article = ({ title, date, text }) => (
  <>
    <h1 className={style.title}>
      {title}
    </h1>
    <span className={style.dateOfArticle}>
      {date}
    </span>
    <p className={style.paragraph}>
      {text}
    </p>
  </>
);

Article.defaultProps = {
  title: 'Article Title',
  date: 'Date of Article',
  text: 'Article Text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
