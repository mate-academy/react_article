import PropTypes from 'prop-types';
import React from 'react';

const Article = ({ title, text, date }) (
  <>
    <h1>{title || null}</h1>
    <p> {text.length < 120 ? text : null}</p>
    <span>{date || null}</span>
  </>
);

export default Article;
