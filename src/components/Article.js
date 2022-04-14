import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  articleInfo: {
    title,
    date,
    text,
  },
}) => (
  <>
    <h1>
      {title}
    </h1>
    <span>
      {date}
    </span>
    <p>
      {text}
    </p>
  </>
);

Article.defaultProps = {
  title: `An article title wasn't found`,
  date: `The date isn't defined`,
  text: `No text`,
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
