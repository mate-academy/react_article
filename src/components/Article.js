import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <p className="title">{title}</p>
    <span className="date">{date}</span>
    <p className="text">{text}</p>
  </>
);

Article.defaultProps = {
  title: 'Please add title',
  date: 'Please add date',
  text: 'Please add text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
