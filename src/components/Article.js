import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, text, date }) {
  return (
    <section>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </section>
  );
}

export default Article;

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
