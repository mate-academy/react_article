import React from 'react';
import PropTypes from 'prop-types';

export default function Date(props) {
  const { date } = props;

  return (
    <span>{date}</span>
  );
}

Date.propTypes = {
  date: PropTypes.string.isRequired,
};
