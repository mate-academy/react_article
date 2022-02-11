import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <div className="Article">
    <h2 className="Article_title">
      {title}
    </h2>
    <span className="Article_date">
      {date}
    </span>
    <p className="Article_text">
      {text}
    </p>
  </div>
);

Article.defaultProps = {
  title: 'Without title',
  date: new Date(),
  text: 'Hello',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
