import React from 'react';
import PropTypes from 'prop-types';
import { getMonths } from '../models/constants/months';

export function Article({ title, date, text }) {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const dateName = day > 9 ? day.toString() : `0${day.toString()}`;
  const monthName = getMonths()[month];
  const formatDate = `${monthName} ${dateName}, ${year}`;

  return (
    <>
      <h1>{title}</h1>
      <p>{formatDate}</p>
      <p>{text}</p>
    </>
  );
}

Article.defaultProps = {
  title: 'no title',
  date: null,
  text: 'no text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  text: PropTypes.string,
};
