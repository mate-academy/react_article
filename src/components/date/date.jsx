import React from 'react';

export const Date = ({ date }) => {
  const today = date;
  const dateISO = today.toISOString().slice(0, 10);
  const dateLocaleString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <time dateTime={dateISO} data-cy="date">
      {dateLocaleString}
    </time>
  );
};
