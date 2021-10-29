import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title,
  date,
  text,
}) => (
  <article className="Article">
    <h1 className="Article_title">
      {title}
    </h1>
    <span className="Article_date">
      {date}
    </span>
    <p className="Article_paragraph">
      {text}
    </p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
