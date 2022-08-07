import React from 'react';
import { Article } from './components/Article';

export const App = () => (
  <div className="App">
    <Article />
    {/* Add an <Article /> and pass `title`, `text` and `date` from the `article` object as props */}
  </div>
);
