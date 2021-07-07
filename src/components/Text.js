import React from 'react';
import PropTypes from 'prop-types';

const Text = props => <p>{props.value}</p>;

Text.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Text;
