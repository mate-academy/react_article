import React from 'react';
import PropTypes from 'prop-types';

const Articel = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Articel.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Articel;
