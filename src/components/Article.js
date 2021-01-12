import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <div>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </div>
  );
}

Article.defaultProps = {
  title: 'no title',
  date: 'no date',
  text: 'no text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
