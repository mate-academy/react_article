import React from 'react';
import Proptypes from 'prop-types';

const Article = (
  {
    title,
    text,
    date,
  },
) => (
  <div className="Article">
    <h1 className="Article__title">
      {title}
    </h1>
    <span className="Article__date">
      {date}
    </span>
    <p className="Article__message">
      {text}
    </p>
  </div>
);

Article.propTypes = {
  title: Proptypes.string,
  date: Proptypes.string,
  text: Proptypes.string,
};

Article.defaultProps = {
  title: 'No title provided',
  date: 'No date provided',
  text: 'No text provided',
};

export default Article;
