import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <article
    className="card bg-light"
    style={{
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
    }}
  >
    <h1 className="card-title">{title}</h1>
    <p className="card-text">{text}</p>
    <span className="text-muted">{date}</span>
  </article>
);

Article.defaultProps = {
  date: '2021',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
};
