import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ input }) => (
  <>
    <h1>{input.title}</h1>
    <span>{input.date}</span>
    <p>{input.text}</p>
  </>
);

Article.defaultProps = {
  input: {
    title: 'No title',
    date: 'No date',
    text: 'No test',
  },
};

Article.propTypes = {
  input: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default Article;
