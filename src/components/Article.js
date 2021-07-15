import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <React.Fragment>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </React.Fragment>
);

Article.defaultProps = {
  title: 'missed title',
  date: 'missed date',
  text: 'missed paragraph',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
