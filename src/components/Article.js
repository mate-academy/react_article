import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title,
  text,
  date,
}) => (
  <article>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </article>
);

Article.defaultProps = {
  title: 'No title',
  text: 'Must be text here...',
  date: '',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
