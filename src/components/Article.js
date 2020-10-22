import React from 'react';
import propTypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </React.Fragment>
  );
}

Article.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default Article;
