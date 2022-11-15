import React from 'react';
import PropsTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <time dateTime={date.toISOString().slice(0, 10)} data-cy="date">
        {
          date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }
      </time>
    </p>

    <p data-cy="text">
      {text}
    </p>
  </div>
);

Article.prototype = {
  title: PropsTypes.string.isRequired,
  date: PropsTypes.PropTypes.instanceOf(Date),
  text: PropsTypes.string.isRequired,
};
