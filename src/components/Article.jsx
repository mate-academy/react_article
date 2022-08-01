// export function Article() {}
import React from 'react';

export function Article({
  title,
  date,
  text,
}) {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
    </>
  );
}
