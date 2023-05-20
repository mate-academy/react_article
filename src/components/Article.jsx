import React from 'react';
import PropTypes from 'prop-types';

export function Article({ title, date, text }) {
  return (
    <>
      <h1>{title}</h1>
      <time dateTime="2022-08-30">{date}</time>
      <p>{text}</p>
    </>
  );
}

Article.defaultProps = {
  title: 'no title',
  date: null,
  text: 'no text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
