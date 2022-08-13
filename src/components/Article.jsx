import React from 'react';
import PropTypes from 'prop-types';

export function Article({ title, date, text }) {
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
  date: '',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
