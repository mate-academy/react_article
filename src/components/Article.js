import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <>
      <h1>{title}</h1>

      <span>{date}</span>

      <p>{text}</p>
    </>
  );
}

Article.defaultProos = {
  title: 'some title should be here',
  date: 'some date should be here',
  text: 'some text should be here',
};

Article.PropsTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
