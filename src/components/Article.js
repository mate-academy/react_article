import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.defaultPops = {
  title: 'title',
  data: 'data',
  text: 'text',
};

Article.propType = {
  title: PropTypes.string,
  data: PropTypes.string,
  text: PropTypes.string,
};
