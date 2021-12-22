import React from 'react';
import PropTypes from 'prop-types';

export function Article({
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
  text: 'Write text',
  date: 'MM/DD/YY',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  date: PropTypes.string,
};
