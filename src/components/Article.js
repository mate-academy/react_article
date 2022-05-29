import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ props }) => {
  const { title, text, date } = props;

  return (
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
};

Article.propType = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
