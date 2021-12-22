import React from 'react';
import PropTypes from 'prop-types';

export function Article({
  title,
  text,
  date,
}) {
  <h1>{title}</h1>;
    <p>{text}</p>;
      <span>{date}</span>;
}

Article.defaultProps = {
  title: 'Please title',
  text: 'Write text',
  date: 'MM/DD/YY',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
};
