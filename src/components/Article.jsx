import React from 'react';
import PropTypes from 'prop-types';

export function Article({ title, date, text }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{text}</p>
    </>
  );
}

Article.defaultProps = {
  title: 'no title',
  date: 'no date',
  text: 'no text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
