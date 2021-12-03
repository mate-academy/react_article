import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>
      <i>{date}</i>
    </span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  date: new Date().getFullYear(),
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string.isRequired,
};
