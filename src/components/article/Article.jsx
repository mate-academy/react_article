import React from 'react';
import PropTypes from 'prop-types';
import { Date } from '../date/date';

export const Article = ({
  title,
  date,
  text,
}) => (
  <div className="box">
    <h2 className="title" data-cy="title">
      {title}
    </h2>

    <p className="subtitle">
      <Date date={date} />
    </p>

    <p data-cy="text">
      {text}
    </p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  text: PropTypes.string.isRequired,
};
