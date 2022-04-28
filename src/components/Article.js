import React from 'react';
import PropTypes from 'prop-types';

export const Article = (props) => {
  const {
    title,
    text,
    date,
  } = props;

  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
};

Article.defaultProps = {
  title: 'Title is not find',
  text: 'Text is not find',
  date: 'Date is not find',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
