import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  const { title, text, date } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{text}</p>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
