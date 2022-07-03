import React from 'react';
import propsTypes from 'prop-types';

export function Article({
  title,
  date,
  text,
}) {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </React.Fragment>
  );
}

Article.propsTypes = {
  title: propsTypes.string,
  date: propsTypes.string,
  text: propsTypes.string,
};
