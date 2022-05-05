import React from 'react';
import PropTypes from 'prop-types';

export const Article = (props) => {
  const { title, text, date } = props;

  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
