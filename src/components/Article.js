import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  const { title, date, text } = props;

  return (
    <div>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
