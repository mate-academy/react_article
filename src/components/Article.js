import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { title, text, date } = props;

  return (
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
