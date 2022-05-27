import React from 'react';
import ProtoTypes from 'prop-types';

const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </>
);

Article.defaultProps = {
  title: 'Article',
  date: String(new Date()),
};

// eslint-disable-next-line react/no-typos
Article.PropTypes = {
  title: ProtoTypes.string,
  date: ProtoTypes.string,
  text: ProtoTypes.string.isRequired,
};

export { Article };
