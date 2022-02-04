import { string } from 'prop-types';
import React from 'react';

const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

export default Article;

Article.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  text: string.isRequired,
};
