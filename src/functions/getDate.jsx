export const dateISO = date => (
  date.toISOString().slice(0, 10)
);

export const dateLocaleString = date => (
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
);
