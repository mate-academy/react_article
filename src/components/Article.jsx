import React from 'react';
import PropTypes from 'prop-types';

export function Article({
  title,
  date,
  text,
}) {
  return (
    <>
      <h1 className="Article__title">
        {title}
      </h1>
      <span className="Article__span">
        {date}
      </span>
      <p className="Article__paragraph">
        {text}
      </p>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
