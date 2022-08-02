import React from 'react';
import PropTypes from 'prop-types';

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
  date: 'without date',
};

Article.propTypes = {
  date: PropTypes.string,
};
