import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, text, date }) {
  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
}

Article.defaultProps = {
  date: 'today',
  text: 'No description',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
