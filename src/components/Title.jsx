import React from 'react';
import PropTypes from 'prop-types';

export default function Title(props) {
  return (
    <h1>{props.title}</h1>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
