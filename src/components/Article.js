import React from 'react';
import PropTypes from 'prop-types';

export function Article({
  title,
  date,
  text,
}) {
  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
}

Article.defaultProps = {
  title: 'No title were send',
  date: 'No date were send',
  text: 'No text were send',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
