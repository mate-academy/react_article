import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  text,
  date,
}) => (
  <>
    <h1>
      {title}
    </h1>
    <p>
      {text}
    </p>
    <span>
      {date}
    </span>
  </>
);

Article.defaultProps = {
  title: 'Title',
  text: 'Some text',
  date: new Date(),
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
