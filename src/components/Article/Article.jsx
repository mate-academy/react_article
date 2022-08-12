import React from 'react';
import PropTypes from 'prop-types';

import './Article.scss';

export const Article = ({
  title,
  text,
  date,
}) => (
  <>
    <h1>{title}</h1>
    <p className="text">{text}</p>
    <span>{date}</span>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
