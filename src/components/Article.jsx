import React from 'react';
import PropTypes from 'prop-types';

export function Article({ title, date, text }) {
  return (
    <>
      <h1 className="h1">
        {title}
      </h1>

      <span className="span">
        {date}
      </span>

      <p className="p">
        {text}
      </p>
    </>
  );
}

Article.defaultProps = {
  title: '',
  date: '',
  text: '',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
