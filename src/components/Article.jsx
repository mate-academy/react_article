import React from 'react';
import PropTypes from 'prop-types';
import './Article.css';

const Article = ({ title, text, date }) => (
  <>
    <h1 className="head">{title}</h1>
    <span className="date">{date}</span>
    <p className="text">{text}</p>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default Article;
