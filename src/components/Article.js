import React from 'react';
import PropTypes from 'prop-types';

export function Article({ title, text, date }) {
  return (
    <>
      <h1>
        {title}
      </h1>
      <p>
        {text}
      </p>
      <span>
        {date}
      </span>
    </>
  );
}

Article.defaultProps = {
  title: 'title',
  text: 'text',
  date: 'date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
