import React from 'react';

const Article = ({ title, date, text }) => (
  <div className="Article">
    <h1>
      {title}
    </h1>
    <span>
      {date}
    </span>

    <p>{text}</p>
  </div>
);

export default Article;
