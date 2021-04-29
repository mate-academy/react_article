import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, date }) => (
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

Article.defaultProps = {
  title: "Sorry, title is not available",
  text: "Sorry, text presently under review",
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default Article;