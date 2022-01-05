import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </>
);

Article.defaultProps = {
  title: 'No Title',
  date: new Date().toLocaleDateString('en-EN', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }),
  text: 'No description',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
