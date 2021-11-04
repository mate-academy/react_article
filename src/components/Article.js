import React from 'react';
import PropType from 'prop-types';

function Article({ title, date, text }) {
  return (
    <div>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </div>
  );
}

Article.propTypes = {
  title: PropType.string.isRequired,
  date: PropType.string.isRequired,
  text: PropType.string.isRequired,
};

export default Article;
