import React from 'react';

function Article(info) {
  return (
    <div>
      <h1>{info.info.title}</h1>
      <span>{info.info.text}</span>
      <p>{info.info.date}</p>
    </div>
  );
}

export default Article;
