import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <>
    <article>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </article>
  </>
);

Article.defaultProps = {
  title: 'Enter the title',
  date: 'Enter the date',
  text: 'Enter the text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
