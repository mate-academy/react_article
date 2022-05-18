import React from 'react';
import PropTypes from 'prop-types';

const Article = props => (
  <>
    <h1 className="articleH1">{props.title}</h1>
    <p className="articleP">{props.text}</p>
    <span className="articleSpan">{props.date}</span>
  </>
);

Article.defaultProps = {
  title: 'title',
  text: 'text',
  date: 'date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
