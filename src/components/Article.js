import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.defaultProps = {
  title: 'Default title',
  date: `${new Date()}`,
  text: 'default text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date) || PropTypes.string,
  text: PropTypes.string,
};
