import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

export const Article = ({ title, date, text }) => (
  <article className="article">
    <div className="article__box">
      <div className="article__info">
        <span className="article__date">{`${date}`}</span>
        <h1 className="article__title">{`${title}`}</h1>
        <p className="article__text">{`${text}`}</p>
      </div>
    </div>
  </article>
);

Article.defaultProps = {
  date: `${new Date().toDateString().substr(4, 6)}, ${new Date().getFullYear()}`,
  text: 'No information provided',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string,
};
