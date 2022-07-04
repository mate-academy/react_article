import React from 'react';
import propTypes from 'prop-types';

export const Article = props => (
  <>
    <h1>
      {props.title}
    </h1>
    <span>
      {props.date}
    </span>
    <p>
      {props.text}
    </p>
  </>
);

Article.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};
