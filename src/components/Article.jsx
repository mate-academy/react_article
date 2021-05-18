import React from 'react';
import propTypes from 'prop-types';

const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <h1>{title}</h1>
    <p>
      {text}
      {' '}
      <span>{date}</span>
    </p>
  </>
);

Article.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};

export default Article;
