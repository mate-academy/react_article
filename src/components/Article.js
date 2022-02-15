import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, data, text }) => (
  <>
    <h1>{title}</h1>

    <date>{data}</date>

    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'some title',
  data: 'some data',
  text: 'some text',
};

Article.propTypes = {
  title: PropTypes.string,
  data: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
