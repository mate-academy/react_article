import React from 'react';
import PropTypes from 'prop-types';

function Article({
  title,
  text,
  date,
}) {
  return (
    <div className="article">
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </div>
  );
}

Article.defaultProps = {
  title: 'No title',
  text: 'No text',
  date: 'No date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
