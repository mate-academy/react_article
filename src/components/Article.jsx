import React from 'react';
import PropsTypes from 'prop-types';

export const Article = props => (
  <React.Fragment>
    <h1>{props.title}</h1>
    <span>{props.date}</span>
    <p>{props.text}</p>
  </React.Fragment>
);

Article.propsTypes = {
  title: PropsTypes.string,
  date: PropsTypes.string,
  text: PropsTypes.string,
};
