import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

function Article({ title, date, text }) {
  return (
    <div>
      <h1 className="header">{ title }</h1>
      <span>{ date }</span>
      <p>{ text }</p>
    </div>
  );
}

Article.defaultProps = {
  date: Date(),
  text: 'Sorry, the text is being edited at the moment.',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
