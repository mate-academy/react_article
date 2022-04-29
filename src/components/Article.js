import React from 'react';
import PropTypes from 'prop-types';

export function Article({ title, text, date }) {
  return (
    <article>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </article>
  );
}

Article.defaultProps = {
  title: 'no Title',
  text: 'without Text',
  date: 'no actual date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
