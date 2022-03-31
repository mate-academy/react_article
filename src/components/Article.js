import React from 'react';
import PropTypes from 'prop-types';

const Article = props => (
  <div>
    <h1>{props.title}</h1>
    <span>{props.date}</span>
    <p>{props.text}</p>
  </div>
);

Article.defaultProps = {
  title: 'Title',
  date: 'Data',
  text: 'Text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
