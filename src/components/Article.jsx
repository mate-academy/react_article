import React from 'react';
import propsTypes from 'prop-types';

export function Article({ title, text, date }) {
  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
}

Article.propsTypes = {
  title: propsTypes.string,
  text: propsTypes.string,
  date: propsTypes.string,
};
