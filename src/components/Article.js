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

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  text: PropTypes.string,
};

Article.defaultProps = {
  title: 'title',
  date: 'date',
  text: 'text',
};

export default Article;
