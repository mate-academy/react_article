import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, text, date }) {
  return (
    <article>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </article>
  );
}

Article.defaultProps = {
  title: 'Article',
  date: `${new Date().toDateString()}`,
  text: null,
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
