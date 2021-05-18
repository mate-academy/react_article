import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  text,
  date,
}) => (
  <div className="block">
    <div className="head">
      <h1 className="title">
        {title}
      </h1>
      <span className="date">
        {date}
      </span>
    </div>

    <p className="paragraph">
      {text}
    </p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
