import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <span className="date">{date}</span>
      <p className="text">{text}</p>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
