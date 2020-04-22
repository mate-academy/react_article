import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, text, date }) {
  return (
    <React.Fragment>
      <h1>
        {title}
      </h1>
      <span>
        {date}
      </span>
      <p>
        {text}
      </p>
    </React.Fragment>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
