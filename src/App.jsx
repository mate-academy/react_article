import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Article } from './components/Article';

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title is-2">React Article</h1>

      <Article />

    </div>
  </div>
);
