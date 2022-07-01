import React from 'react';

/* const Article = () => (
  <h1>1111</h1>
);

export default Article; */
export function Article(article) {
  return (
    <>
      <h1>{`${article.title}`}</h1>
      <span>{`${article.date}`}</span>
      <p>{`${article.text}`}</p>
    </>
  );
}
