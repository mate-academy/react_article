import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

export const Article = ({ title, date, text }) => (
  <>
    <h1>
      {title}
    </h1>
    <span className="date">
      {date}
    </span>
    <p className="text">
      {text}
    </p>
  </>
);

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

Article.defaultProps = {
  title: 'Default title',
  date: 'Default date',
  text: 'Default text',
};
