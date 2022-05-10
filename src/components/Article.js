import React from 'react';
import PropType from 'prop-types';

export const Article = ({
  title,
  date,
  text,
}) => (
  <>
    <h1>
      {title}
    </h1>
    <span>
      {date}
    </span>
    <p>
      {text}
    </p>
  </>
);

Article.propType = {
  title: PropType.string.isRequired,
  date: PropType.string.isRequired,
  text: PropType.string.isRequired,
};
