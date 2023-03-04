import React from 'react';

function Person({ title, date, text }) {
  return (
    <section className="section">
      <h2 className="container" data-cy="title">{title}</h2>
      <p ata-cy="date">
        {date}
      </p>
      <p ata-cy="date">
        {text}
      </p>
    </section>
  );
}

export default Person;
