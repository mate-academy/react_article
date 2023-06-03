import React from 'react';

export function Article({ title, date, text }) {
  function formatDate(dateString) {
    const dateFormat = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return dateFormat.toLocaleDateString('en-US', options);
  }

  return (
    <>
      <h2 className="title">{title}</h2>

      <p className="subtitle">
        {formatDate(date)}
      </p>

      <p>
        {text}
      </p>
    </>
  );
}
