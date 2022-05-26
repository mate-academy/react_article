import React from 'react';
import { article } from './components/Article';

const App = () => (
  <>
    <h1>{article.title}</h1>
    <span>{article.date}</span>
    <p>{article.text}</p>
  </>
);

export default App;
