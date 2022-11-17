import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function Date({ date, attr }) {
  const dateISO = date.toISOString().slice(0, 10);

  return (
    <time dateTime={dateISO} data-cy={attr}>
      {formatDate(date)}
    </time>
  );
}
