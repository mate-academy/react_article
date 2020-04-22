import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ info }) => (
  <div>
    <h1>{info.title}</h1>
    <span>{info.date}</span>
    <p>{info.text}</p>
  </div>
);

Article.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};
