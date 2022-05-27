import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <>
    <article className="message is-info message is-danger">
      <div className="message-header">
        <h1>{title}</h1>
      </div>
      <div className="message-body">
        <strong><span>{date}</span></strong>
        <p>{text}</p>
      </div>
    </article>
  </>
);

Article.defaultProps = {
  title: 'Add title',
  date: 'Add date',
  text: 'Add text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
