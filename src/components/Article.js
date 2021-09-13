import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, data }) => (
  <>
    <h1>
      {title}
    </h1>
    <spam>
      {text}
    </spam>
    <p>
      {data}
    </p>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default Article;
