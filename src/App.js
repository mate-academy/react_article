import React from 'react';
import { Article } from './components/Article/Article';
import { article } from './constants/mocContent';

const App = () => (
  <Article
    title={article.title}
    text={article.text}
    date={article.date}
  />
);

export default App;
