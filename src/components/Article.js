import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, text, date }) {
  return (
    <>
      <h1>
        {title}
      </h1>

      <p>
        {text}
      </p>

      <span>
        {date}
      </span>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

Article.defaultProps = {
  title: 'Default title',
  text: 'Default text',
  date: 'Month Day, Year',
};

export default Article;
