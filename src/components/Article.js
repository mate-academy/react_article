import React from 'react';
import PropTypes from 'prop-types';

import './Article.scss';

export const Article = ({
  title,
  date,
  text,
}) => (
  <section className="section">
    <h1 className="title">{title}</h1>
    <span className="date">{date}</span>
    <p className="text">{text}</p>
  </section>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
