import React from 'react';
import { string } from 'prop-types';
import '../App.scss';

Article.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  text: string.isRequired,
};

function Article({ title, date, text }) {
  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
}

export default Article;
