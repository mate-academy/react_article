import React from 'react';
import { string } from 'prop-types';

export const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  date: 'No date',
  text: 'No description',
};

Article.propTypes = {
  title: string.isRequired,
  date: string,
  text: string,
};
