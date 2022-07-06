import React from 'react';
import propsTypes from 'prop-types';

export function Article({
  title,
  date,
  text,
}) {
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
  date: propsTypes.string,
  text: propsTypes.string,
};
