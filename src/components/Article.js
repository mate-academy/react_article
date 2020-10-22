import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

function Article({ title, date, text }) {
  return (
    <>
      <h1 className="title">
        {title}
      </h1>

      <span className="date">
        {date}
      </span>

      <p className="text">
        {text}
      </p>
    </>
  );
}

export default Article;

Article.defaultProps = {
  title: 'No Title',
  date: 'No Date',
  text: 'No Text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
