import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ objectWithDataForArticle }) => (
  <>
    <h1>
      { objectWithDataForArticle.title }
    </h1>
    <span>
      {objectWithDataForArticle.date}
    </span>
    <p>
      {objectWithDataForArticle.text}
    </p>
  </>
);

Article.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  objectWithDataForArticle: PropTypes.object,
};

Article.defaultProps = {
  objectWithDataForArticle: {
    title: 'Title',
    date: 'Date',
    text: 'Text',
  },
};

export default Article;
