import React from 'react';
import '../App.scss';
import { PropTypes } from 'prop-types';

export const Article = ({ 
  title,
  date,
  text,
}) => (
  <>
    <h1 className="content__title">{title}</h1>
    <p className="content__block">{text}</p>
    <span className="content__date">{date}</span>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
