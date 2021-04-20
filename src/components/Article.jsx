import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </React.Fragment>
  );
}

Article.defaultProps = {
  title: 'Title',
  date: 'August 21, 2021',
  text: 'Text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  text: PropTypes.string,
};

export default Article;
