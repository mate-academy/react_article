import React from 'react';
import 'bulma/css/bulma.css';
import { Article } from './components/Article';
import { firstArticle } from './components/FirstArticle';

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title is-2">React Article</h1>

      <Article
        title={firstArticle.title}
        text={firstArticle.text}
        date={firstArticle.date}
      />

    </div>
  </div>
);
