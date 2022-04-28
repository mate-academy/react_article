import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

const Article = ({
  title,
  text,
  date,
}) => (
  <>
    <h1 className="title">
      {title}
    </h1>

    <span className="date">
      {date}
    </span>

    <p className="text">
      {text}
    </p>
  </>
);

Article.defaultProps = {
  date: 'without date',
  text: 'now it is empty',
};

Article.PropsTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  data: PropTypes.string,
};

export default Article;
