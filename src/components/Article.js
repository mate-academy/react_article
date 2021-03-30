import React from 'react';
import ProtoTypes from 'prop-types';

const Article = ({
  title,
  text,
  date,
}) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.propTypes = {
  title: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  date: ProtoTypes.string.isRequired,
};

export default Article;
