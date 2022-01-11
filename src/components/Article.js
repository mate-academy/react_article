import React from 'react';
import PropsType from 'props-type';

function Article({
  title,
  date,
  text,
}) {
  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
}

Article.defaultProps = {
  title: null,
  date: null,
  text: null,
};

Article.propTypes = {
  title: PropsType.string,
  date: PropsType.string,
  text: PropsType.string,
};

export default Article;
