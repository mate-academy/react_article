import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <>
    <h1 className="title">
      {title}
    </h1>
    <span className="date">{date}</span>
    <p className="text">{text}</p>
  </>
);

Article.defaultProps = {
  title: '',
  date: new Date().toDateString(),
  text: '',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export { Article };
