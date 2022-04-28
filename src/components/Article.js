import React from 'react';
import PropType from 'prop-types';

const Article = (props) => {
  const {
    title,
    date,
    text,
  } = props;

  return (
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </article>
  );
};

Article.defaultProps = {
  title: 'Invalid title',
  date: 'Invalid date',
  text: 'Invalid text',
};

Article.propType = {
  title: PropType.string,
  date: PropType.date,
  text: PropType.string,
};

export default Article;
