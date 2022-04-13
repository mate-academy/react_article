import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <>
    <h1 className="article_title">{title}</h1>
    <span className="article_date">{date}</span>
    <p className="article_text">{text}</p>
  </>
);

Article.defaultProps = {
  title: 'Please create a title',
  date: 'Any date is good',
  text: 'Please write down text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
