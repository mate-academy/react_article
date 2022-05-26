
import React from 'react';
import propTypes from 'prop-types';

export const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'Add title',
  date: 'Add date',
  text: 'Add text',
};

Article.propTypes = {
  title: propTypes.string,
  date: propTypes.string,
  text: propTypes.string,
};
