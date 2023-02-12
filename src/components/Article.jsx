import React from 'react';

const today = new Date();
const dateISO = today.toISOString().slice(0, 10);
const dateLocaleString = today.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export const Article = ({
  title,
  text,
  date,
}) => (
  <>
    <div className="box">
      <h2 className="title" data-cy="title">
        { title }
      </h2>

      <p className="subtitle">
        <time
          dateTime={
            !date
              ? dateISO
              : date.toISOString().slice(0, 10)
          }
          data-cy="date"
        >
          {!date ? dateLocaleString : date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </p>

      <p data-cy="text">
        {text}
      </p>
    </div>
  </>
);
