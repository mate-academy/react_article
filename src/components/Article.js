import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <article>
    <h2>
      {title}
    </h2>
    <p>
      {text}
    </p>
    <small>
      {date}
    </small>
  </article>
);

Article.defaultProps = {
  title: 'Article title',
  date: '00/00/00',
  text: 'Article text content',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
