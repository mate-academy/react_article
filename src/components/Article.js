import React from 'react';
import '../App.scss';

export const Article = props => (
  <>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
    <span>{props.date}</span>
  </>

);
