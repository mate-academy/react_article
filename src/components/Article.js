import React from 'react';
import PropsType from 'prop-types';

const Article = ({ title, date, text }) => (
  <div>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </div>
);

Article.propTypes = {
  title: PropsType.string.isRequired,
  date: PropsType.string.isRequired,
  text: PropsType.string.isRequired,
};

export default Article;
