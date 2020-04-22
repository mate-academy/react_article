import React from 'react';

const Article = ({title, text, date}) => {
  return (
    <div>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </div>
  )
}

export default Article;
