import React from 'react';

export const Article = ({ date, title, text }) => {
  const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };

  const convertedDate = date.toLocaleDateString('en-CA', dateOptions);

  return (
    <>
      <h1 className="title is-2">React Article</h1>

      <div className="box">
        <h2 className="title" data-cy="title">
          {title}
        </h2>

        <p className="subtitle">
          <time dateTime={date.toLocaleDateString('en-CA')} data-cy="date">
            {convertedDate}
          </time>
        </p>

        <p data-cy="text">
          {text}
        </p>
      </div>
    </>
  );
};
