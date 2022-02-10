import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <article>
    <h1>
      {title}
    </h1>
    <span>
      {date}
    </span>
    <p>
      {text}
    </p>
  </article>
);

Article.defaultProps = {
  title: 'There is no data',
  date: 'There is no data',
  text: 'There is no data',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
