import React from 'react';
import 'bulma/css/bulma.css';
import { Article } from './components/Article';
import { firstArticle } from './components/firstArticle';

export const App = () => {
  const {
    title,
    date,
    text,
  } = firstArticle;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title is-2">React Article</h1>
        <Article
          title={title}
          text={text}
          date={date}
        />
      </div>
    </div>
  );
};
