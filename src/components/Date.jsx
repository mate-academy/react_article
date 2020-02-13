import React from 'react';
import PropTypes from 'prop-types';

export default function Date(props) {
  return (
    <span>{props.date}</span>
  );
}

Date.propTypes = {
  date: PropTypes.string.isRequired,
};
