import React from 'react';
import PropTypes from 'prop-types';

export function Article({ title, date, text }) {
  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
}

Article.defaultProps = {
  title: 'No Title',
  date: new Date(),
  text: 'No Text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
