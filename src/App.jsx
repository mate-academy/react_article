import React from 'react';
import { Article } from './components/Article';
import { firstArticle } from './data/firstArticle';
import 'bulma/css/bulma.css';

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title is-2">React Article</h1>
      <Article article={firstArticle} />
    </div>
  </div>
);
