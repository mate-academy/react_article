import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, text, date }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </article>
  );
}

Article.defaultProps = {
  title: 'Some title',
  text: 'Some text',
  date: 'September',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
