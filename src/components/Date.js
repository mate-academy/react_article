import React from 'react';
import PropTypes from 'prop-types';

const Date = props => <span>{props.value}</span>;

Date.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Date;
