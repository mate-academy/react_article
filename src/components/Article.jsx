import { string } from 'prop-types';
import React from 'react';

export const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
  date: string.isRequired,
};
