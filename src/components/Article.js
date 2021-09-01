import React from 'react';
import PropTypes from 'prop-types';

export function Article(props) {
  const { title, text, date } = props;

  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
}

Article.defaultProps = {
  title: 'There is no title',
  date: new Date(),
  text: 'There is no text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  text: PropTypes.string,
};
