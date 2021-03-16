import React from 'react';
import Proptypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
}

Article.propTypes = {
  title: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired,
};

export default Article;
