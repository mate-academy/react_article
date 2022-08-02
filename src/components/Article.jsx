import React from 'react';

export function Article({ title, date, text }) {
  return (
    <>
      <h1 className="Article__title">
        {title}
      </h1>

      <span className="Article__date">
        {date}
      </span>

      <p className="Article__text">
        { text }
      </p>
    </>
  );
}
