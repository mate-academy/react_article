import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title = 'No Name',
  text = 'No description',
  date = 'No information',
}) => (
  <div>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </div>
);

Article.defaultProps = {
  title: 'No Name',
  text: 'No description',
  date: 'No information',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
