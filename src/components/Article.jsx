import React from 'react';

function Article({ title, date, text }) {
  return (
    <>
      <h1 className='title'>{title}</h1>
      <span className='date'>{date}</span>
      <p className='text'>{text}</p>
    </>
  );
}

export default Article;
