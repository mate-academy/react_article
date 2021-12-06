import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <article>
    <h1>{title}</h1>
    <span>
      <i>{date}</i>
    </span>
    <p>{text}</p>
  </article>
);

Article.defaultProps = {
  date: '',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default Article;
