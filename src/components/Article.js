import PropTypes from 'prop-types';
import React from 'react';

export function Article({ title, text, date }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </>
  );
}

Article.defaultProps = {
  title: '',
  text: '',
  date: new Date(),
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
