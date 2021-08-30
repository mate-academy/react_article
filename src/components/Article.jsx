import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ props }) => {
  const {
    title,
    text,
    date,
  } = props;

  return (
    <main>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </main>
  );
};

Article.propTypes = {
  props: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
