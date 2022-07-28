import React from 'react';

export function Article({ title, text, date }) {
  return (
    <>
      <h1>{title}</h1>
      <span>{text}</span>
      <p>{date}</p>
    </>
  );
}

Article.defaultProps = {
  title: 'This is a title',
  text: 'This is a text',
  date: 'This is a date',
};
