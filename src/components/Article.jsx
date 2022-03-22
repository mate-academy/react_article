import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ article }) => {
  const { title, date, text } = article;

  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
};

Article.defaultProps = {
  title: 'no title',
  date: 'date is undefined',
  text: 'there is no additional text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
