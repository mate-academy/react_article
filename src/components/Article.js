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
  title: 'React article',
  date: 'February 11, 2022',
  text: 'Hello, world!',
};

Article.propTypes = {
  title: string,
  date: string,
  text: string,
};
