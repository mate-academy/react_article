import React from 'react';
import propsTypes from 'prop-types';

const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <h1>{title}</h1>

    <span>{date}</span>

    <p>{text}</p>
  </>
);

Article.propsTypes = {
  title: propsTypes.string,
  date: propsTypes.string,
  text: propsTypes.string,
};

export default Article;
