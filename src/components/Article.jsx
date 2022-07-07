import React from 'react';

function Article({ text, date, title }) {
  return (
    <>
      <h1>
        {title}
      </h1>
      <span>
        {date}
      </span>
      <p>
        {text}
      </p>
    </>
  );
}

export default Article;
