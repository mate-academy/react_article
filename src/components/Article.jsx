import React from 'react';
// import { firstArticle } from '../App';

export const Article = ({ title, date, text }) => (
  <>
    <p>{title}</p>
    <p>{date}</p>
    <p>{text}</p>
  </>
);

export default Article;
