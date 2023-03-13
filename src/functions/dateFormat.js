export const getDateISO = date => (
  date.toISOString().slice(0, 10)
);

export const getLocaleDate = date => (
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
);
