import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  text,
  date,
}) => (
  <div className="block">
    <h1 className="title">
      {title}
    </h1>

    <p className="paragraph">
      {text}
    </p>

    <span className="date">
      {date}
    </span>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
