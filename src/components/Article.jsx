import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  text,
  date,
}) => (
  <>
    <h1 className="Article__title">
      {title}
    </h1>

    <p className="Article__paragraph">
      {text}
    </p>
    <span className="Article__date">
      {date}
    </span>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
