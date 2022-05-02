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
  title: 'React Article',
  text: 'I like React',
  date: 'August 32, 11019',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
