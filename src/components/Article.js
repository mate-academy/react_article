import { string } from 'prop-types';
import React from 'react';

function Article({
  title,
  text,
  date,
}) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </article>
  );
}

Article.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
  date: string.isRequired,
};

export default Article;
