import React from 'react';
import 'bulma/css/bulma.css';
import { Article } from './components/Article';
import { firstArticle } from './firstArticle';

const { title, date, text } = firstArticle;

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title is-2">React Article</h1>

      {/* Add an <Article /> and pass `title`, `text` and `date` from the `article` object as props */}
      <Article
        title={title}
        date={date}
        text={text}
      />

    </div>
  </div>
);
