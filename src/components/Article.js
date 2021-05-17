import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'title',
  date: 0,
  text: ' ',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  text: PropTypes.string,
};

export default Article;
