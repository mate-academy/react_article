import React from 'react';
import PropTypes from 'prop-types';

function Article({
  title,
  text,
  date,
}) {
  return (
    <>
      <h1>
        {`${title}`}
      </h1>
      <p>
        {`${text}`}
      </p>
      <span>
        {`${date}`}
      </span>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
