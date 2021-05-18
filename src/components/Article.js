import React from 'react';
import { string } from 'prop-types';
import './Article.scss';

function Article({ title, date, text }) {
  return (
    <>
      <h1 className="article__title">{title}</h1>
      <span className="article__date">{date}</span>
      <p className="article__text">{text}</p>
    </>
  );
}

Article.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  text: string.isRequired,
};

export default Article;
