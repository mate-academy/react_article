import React from 'react';
import PropTypes from 'prop-types';

const Artice = ({
  title,
  date,
  text,
}) => (
  <>
    {title}
    {date}
    {text}
  </>
);

Artice.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Artice;
