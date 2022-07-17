import React from 'react';

export function Article({ title, date, text }) {
  return (
    <>
      <h1>{title}</h1>
      <date>{date}</date>
      <text>{text}</text>
    </>
  );
}
