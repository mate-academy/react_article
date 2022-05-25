import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <>
    <h1>{`${title}`}</h1>
    <span>{`${date}`}</span>
    <p>{`${text}`}</p>
  </>
);

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

Article.defaultProps = {
  title: 'Title',
  date: new Date(),
  text: 'some text',
};
