import React from 'react';
import PropTypes from 'prop-types';

export function Article(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <span>{props.date}</span>
      <p>{props.text}</p>
    </>
  );
}

Article.defaultProps = {
  date: 'No dates',
  text: 'No text',
  title: 'No title',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
