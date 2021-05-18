import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  date,
  // eslint-disable-next-line react/prop-types
  text,
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

// eslint-disable-next-line react/no-typos
Article.PropTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
