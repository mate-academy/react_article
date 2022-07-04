import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title,
  text,
  date,
}) => (
  <article>
    <h1>
      {title}
    </h1>

    <span>
      {date}
    </span>

    <p>
      {text}
    </p>
  </article>
);

Article.prototype = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.date,
};
