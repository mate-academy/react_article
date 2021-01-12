import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, date, text }) {
  return (
    <main>
      <h1>{ title }</h1>
      <span>{ date }</span>
      <p>{ text }</p>
    </main>
  );
}

Article.defaultProps = {
  date: Date(),
  text: 'Sorry, the text is being edited by a moderator.',
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
