
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <Fragment>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </Fragment>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
