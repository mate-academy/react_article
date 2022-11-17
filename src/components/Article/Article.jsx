import React from 'react';
import { Date } from '../Date';

export function Article({ article }) {
  const {
    title,
    date,
    text,
  } = article;

  const attrNames = Object.keys(article);

  return (
    <div className="box">
      <h2 className={attrNames[0]} data-cy={attrNames[0]}>
        {title}
      </h2>

      <p className="subtitle">
        <Date date={date} attr={attrNames[1]} />
      </p>

      <p data-cy={attrNames[2]}>
        {text}
      </p>
    </div>
  );
}
