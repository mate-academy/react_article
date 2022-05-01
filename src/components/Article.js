import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  date,
  text,
}) => (
  <article className="content">
    <h1 className="title">
      {title}
    </h1>
    <span className="date">
      {date}
    </span>
    <p className="text">
      {text}
    </p>
  </article>
);

Article.defaultProps = {
  text: 'No text',
  date: 'Unknown date',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
