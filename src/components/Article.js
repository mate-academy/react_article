import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => {
  return (<>
    <h1>
      {title}
    </h1>
    <span>
      {date}
    </span>
    <p>
      {text}
    </p>
  </>)
};

Article.defaultProps = {
  title: 'Title',
  date: 'Date',
  text: 'Some text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
