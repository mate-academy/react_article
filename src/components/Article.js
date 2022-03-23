import React from 'react';
import PropTypes from 'prop-types';

function Article({
  title,
  text,
  date,
}) {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </>
  );
}

Article.defaultProps = {
  title: 'No title',
  text: 'No text added',
  date: 'No date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
