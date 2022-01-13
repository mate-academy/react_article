import React from 'react';
import PropTypes from 'prop-types';

import './Article.scss';

export const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <h1 className="article__title">{title}</h1>
    <span className="article__date">{date}</span>
    <p className="article__paragraph">{text}</p>
  </>
);

Article.defaultProps = {
  title: 'Title of article',
  date: 'Created on',
  text: 'Content of article',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
