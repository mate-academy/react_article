import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, text, date }) {
  return (
    <div>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </div>
  );
}

Article.defaultProps = {
  title: 'title',
  text: 'text',
  date: 'date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
