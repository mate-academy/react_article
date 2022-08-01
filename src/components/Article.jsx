import React from 'react';

export const Article = (props) => {
  const {
    title,
    text,
    date,
  } = props;

  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{text}</p>
    </>
  );
};
