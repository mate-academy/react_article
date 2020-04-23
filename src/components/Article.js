import React from 'react';

function Article(obj) {
  return (
    <div>
      <h1>{obj.title}</h1>
      <span>{obj.date}</span>
      <p>{obj.text}</p>
    </div>
  );
}

export default Article;
