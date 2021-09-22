import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

function Article(props) {
  return (
    <>
      <h1 className="title">{props.title}</h1>
      <span className="date">{props.date}</span>
      <p className="text">{props.text}</p>
    </>
  );
}

Article.defaultProps = {
  title: 'React Article',
  date: null,
  text: null,
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
