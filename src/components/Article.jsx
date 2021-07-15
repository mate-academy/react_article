import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

function Article({
  title,
  date,
  text,
}) {
  return (
    <div className="article">
      <h1>{title}</h1>
      <span className="date">
        {date}
      </span>
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
