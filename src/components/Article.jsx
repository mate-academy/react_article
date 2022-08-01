// export function Article() {}
import React from 'react';

export function Article({ title, text, date }) {
  return (
    <>
      <h1>
        { title }
      </h1>

      <p>
        { text }
      </p>

      <span>
        { date }
      </span>
    </>
  );
}
