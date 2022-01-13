import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <>
    <h1>
      {title}
    </h1>
    <span>
      {text}
    </span>
    <p>
      {date}
    </p>
  </>
);

Article.defaultProps = {
  title: 'Add title',
  text: `Add text`,
  date: 'Add date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
