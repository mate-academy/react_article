import React from 'react';
import './Article.scss';
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

    <span>
      {date}
    </span>

    <p>
      {text}
    </p>
  </>
);

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

Article.defaultProps = {
  title: '',
  text: '',
  date: '',
};

export default Article;
