import React, { Fragment } from 'react';
import PropType from 'prop-types';

function Article(props) {
  const { title, text, date } = props;

  return (
    <Fragment>
      <h1>
        {title}
      </h1>
      <p>
        {date}
      </p>
      <p>
        {text}
      </p>
    </Fragment>
  );
}

Article.propTypes = {
  title: PropType.string.isRequired,
  text: PropType.string.isRequired,
  date: PropType.string.isRequired,
};

export default Article;
