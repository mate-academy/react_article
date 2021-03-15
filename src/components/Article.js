import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <h1>
      {title}
    </h1>
    <span>
      {date}
    </span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'Title',
  date: 'Date',
  text: 'Text',
};

Article.propTypes = {
  text: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};

export default Article;
