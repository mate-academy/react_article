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

Article.defaulProps = {
  title: 'No title',
  date: 'No date',
  text: 'No text',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
