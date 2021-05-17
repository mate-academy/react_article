import React from 'react';
import { string } from 'prop-types';
import './Article.scss';

Article.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  text: string.isRequired,
};

function Article({ title, date, text }) {
  return (
    <>
      <h1 className="article__title">{title}</h1>
      <span className="article__date">{date}</span>
      <p className="article__text">{text}</p>
    </>
  );
}

export default Article;
