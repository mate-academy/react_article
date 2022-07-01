import React from 'react';
import PropsTypes from 'prop-types';

export const Article = ({ date, text, title }) => (
  <React.Fragment>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </React.Fragment>
);

Article.propsTypes = {
  title: PropsTypes.string,
  date: PropsTypes.string,
  text: PropsTypes.string,
};
