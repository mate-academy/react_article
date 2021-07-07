import React from 'react';
import PropTypes from 'prop-types';

const Title = props => <h1>{props.value}</h1>;

Title.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Title;
