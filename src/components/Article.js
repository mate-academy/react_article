import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, text }) => (
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

Article.defaultProps = {
  title: 'No Title',
  date: '12.08.2020',
  text: 'Bla bla bla',
};

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
