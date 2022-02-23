import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const article = document.getElementById('root');
const body = document.querySelector('body');

article.className = 'article body__article';
body.className = 'body';

ReactDOM.render(
  <App />,
  article,
);
