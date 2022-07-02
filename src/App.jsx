import React from 'react';
import { Article, article } from './components/Article';

const App = () => (
  <Article
    title={article.title}
    date={article.date}
    text={article.text}
  />
);

export default App;
