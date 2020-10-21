import React from 'react';
import Proptypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <main>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </main>
  );
}

Article.propTypes = {
  title: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired,
};

export default Article;
