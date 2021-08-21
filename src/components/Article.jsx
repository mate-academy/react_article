import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

export function Article({ title, text, date }) {
  return (
    <div className="article">
      <h1 className="article__title">
        {title}
      </h1>

      <p className="article__text">
        {text}
      </p>

      <span className="article__date">
        {date}
      </span>
    </div>
  );
}

Article.defaultProps = {
  title: '',
  text: '',
  date: '',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
