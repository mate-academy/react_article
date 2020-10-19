import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = ({ title, text, date }) => (
  <div className="card">
    <div className="card-body mx-auto w-75 p-3">
      <h1 className="card-title">{ title }</h1>

      <span className="card-subtitle mb-3 text-muted">
        { date }
      </span>

      <p className="card-text">{ text }</p>
    </div>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;
