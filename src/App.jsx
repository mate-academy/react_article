import React from 'react';
import { Article, firstArticle } from './components/Article';
import 'bulma/css/bulma.css';

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title is-2">React Article</h1>
      <Article {...firstArticle} />
    </div>
  </div>
);
