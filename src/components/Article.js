import React from 'react';
import PropTypes from 'prop-types';

export default function Article({ title, text, date }) {
  return (
    <article>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </article>
  );
}

Article.defaultProps = {
  title: 'title place',
  text: 'text place',
  date: 'date place',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
