import React from 'react';

export function Article({ title, date, text }) {
  const dataCopy = new Date(date);
  const months = ['January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
  ];

  return (
    <>
      <p>
        {`${months[dataCopy.getMonth()]} ${dataCopy.getDate()} ${dataCopy.getUTCFullYear()}`}
      </p>
      <div className="box">
        <h2 className="title" data-cy="title">
          {title}
        </h2>

        <p className="subtitle">
          <time dateTime={date.toISOString().slice(0, 10)} data-cy="date">
            {date.toLocaleDateString('en-US', {
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
}
