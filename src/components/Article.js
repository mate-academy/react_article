import React from 'react';
import PropType from 'prop-types';

function Article({ title, date, text }) {
  return (
    <>
      <div className="Article">
        <h1 className="Article__title">
          {title}
        </h1>

        <span className="Article__text">
          {text}
        </span>

        <p className="Article__date">
          {date}
        </p>
      </div>
    </>
  );
}

Article.propTypes = {
  title: PropType.string.isRequired,
  text: PropType.string.isRequired,
  date: PropType.string.isRequired,
};

export default Article;
