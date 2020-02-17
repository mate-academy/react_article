import React from 'react';
import PropTypes from 'prop-types';

export default function Text(props) {
  const { text } = props;

  return (
    <p>{text}</p>
  );
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
};
