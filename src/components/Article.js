import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>
      <i>{date}</i>
    </span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'No data :(',
  date: 'No data :(',
  text: 'No data :(',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
