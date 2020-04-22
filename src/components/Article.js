import React from 'react';

function Article(title, text, date) {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <span>
        {text}
      </span>
      <p>
        {date}
      </p>
    </div>
  );
}

export default Article;
