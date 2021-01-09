import React from 'react';
import PropTypes from 'prop-types';

const ShowText = ({ title, text, date }) => (
  <div>
    <h1>{title}</h1>
    <span>{text}</span>
    <p>{date}</p>
  </div>
);

ShowText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ShowText;
