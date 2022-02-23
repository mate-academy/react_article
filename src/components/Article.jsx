import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({
  title,
  date,
  text,
}) => (
  <div>
    <h1>
      {title}
    </h1>

    <span>
      {date}
    </span>

    <p>
      {text}
    </p>
  </div>
);

Article.defaultProps = {
  title: 'Default title',
  date: '23.02.2022',
  text: 'Default text',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};
