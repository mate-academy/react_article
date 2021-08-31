import React from 'react';
import PropsTypes from 'prop-types';

export const Article = ({ title, text, date }) => (
  <>
    <h1 className="article__header">{title}</h1>
    <span className="article__description">{text}</span>
    <p className="article__date">{date}</p>
  </>
);

Article.defaultProps = {
  title: 'Some title',
  text: 'Some text',
  date: 'Some date',
};

Article.propTypes = {
  title: PropsTypes.string,
  text: PropsTypes.string,
  date: PropsTypes.string,
};
