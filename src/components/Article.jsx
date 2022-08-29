import React from 'react';

export function Article({
  tittle,
  text,
  date,
}) {
  return (
    <>
      <h1>{ tittle }</h1>
      <span>{ date }</span>
      <p>{ text }</p>
    </>
  );
}
