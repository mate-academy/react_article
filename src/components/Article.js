import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, text, date }) {
  return (
    <article className="article">
      <h1>
        {title}
      </h1>
      <span className="article__date">
        {date}
      </span>
      <p>
        {text}
      </p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
