import React from 'react';
import PropTypes from 'prop-types';

export function Article({ title, text, date }) {
  return (
    <>
      <h1>
        {title}
      </h1>
      <span>
        {date}
      </span>
      <p>
        {text}
      </p>
    </>
  );
}

Article.defaultProps = {
  title: 'No title provided',
  text: 'No text provided',
  date: 'No date provided',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
