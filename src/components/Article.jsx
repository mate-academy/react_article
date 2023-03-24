import React from 'react';
// import { firstArticle } from '../App';

export const Article = ({ title, date, text }) => (
  <>
    <h2>{title}</h2>
    <p>{date}</p>
    <p>{text}</p>
  </>
);

export default Article;
