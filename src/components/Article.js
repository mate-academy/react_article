import React from 'react';
import PropTypes from 'prop-types';

function Article({
  title,
  date,
  text,
}) {
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
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string,
};

Article.defaultProps = {
  date: 'No date',
  text: 'No text',
};

export default Article;
