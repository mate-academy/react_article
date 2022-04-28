import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const {
    title,
    date,
    text,
  } = props;

  return (
    <article>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </article>
  );
};

Article.defaultProps = {
  text: 'No text...',
  date: 'No date...',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
