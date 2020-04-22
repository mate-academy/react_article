import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { title, date, text } = props;

  return (
    <div>
      <h1>{title}</h1>
      <span>{text}</span>
      <p>{date}</p>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
