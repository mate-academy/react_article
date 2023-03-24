import React from 'react';
// import { firstArticle } from '../App';

export const Article = ({ title, date, text }) => (
  <>
    <article>{title}</article>
    <article>{date}</article>
    <article>{text}</article>
  </>
);

export default Article;
