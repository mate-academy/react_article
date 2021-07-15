import React from 'react';
import Article from './components/Article';

const article = {
  date: 'August 30, 2019',
};

const { title, text, date } = article;

const App = () => (
  <>
    <h1>React Article</h1>
    <Article
      title={title}
      text={text}
      date={date}
    />
  </>
);

export default App;
