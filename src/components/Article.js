import React from 'react';
// import PropTypes from 'prop-types';

export const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <hi>{title}</hi>
    <span>{date}</span>
    <p>{text}</p>
  </>
);
