import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title,
  text,
  date,
}) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'Enter title',
  date: 'Enter date',
  text: 'Enter text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
