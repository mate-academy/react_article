import React from 'react';
import PropsTypes from 'prop-types';

const Article = ({ title, text, date }) => (
  <>
    <h1>{ title }</h1>
    <span>{ date }</span>
    <p>{ text }</p>
  </>
);

Article.defaultProps = {
  text: '',
  date: '',
};

Article.propTypes = {
  title: PropsTypes.string.isRequired,
  text: PropsTypes.string,
  date: PropsTypes.string,
};

export default Article;
