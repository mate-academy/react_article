import React from 'react';
import PropTypes from 'prop-types';

const Article = props => (
  <>
    <h1>
      {props.title}
    </h1>
    <span>
      {props.date}
    </span>
    <p>
      {props.text}
    </p>
  </>
);

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

Article.defaultProps = {
  title: 'Default title',
  date: 'Default date',
  text: 'Default text',
};

export default Article;
