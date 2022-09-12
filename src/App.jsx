import React from 'react';
import 'bulma/css/bulma.css';
import { Article } from './components/Article';

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title is-2">React Article</h1>

      {/* Add an <Article /> and pass `title`, `text` and `date` from the `article` object as props */}
      <Article />
    </div>
  </div>
);
