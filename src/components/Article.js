import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  text,
  date,
}) => (
  <Fragment>
    <h2>{title}</h2>
    <span>{text}</span>
    <p>{date}</p>
  </Fragment>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
