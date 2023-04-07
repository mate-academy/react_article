import React from 'react';
import { Article } from './components/Article';
import { firstArticle } from './data/firstArticle';
import 'bulma/css/bulma.css';

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title is-2">React Article</h1>
      <Article
        title={firstArticle.title}
        date={firstArticle.date}
        text={firstArticle.text}
      />
    </div>
  </div>
);
