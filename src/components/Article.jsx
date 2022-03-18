import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title,
  text,
  date,
}) => (
  <>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </>
);

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

Article.defaultProps = {
  title: 'No Title',
  text: 'No Text',
  date: 'No Date',
};
