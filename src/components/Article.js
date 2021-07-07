import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Text from './Text';
import Date from './Date';

const Article = ({ title, date, text }) => (
  <article className="article">
    <Title value={title} />
    <Date value={date} />
    <Text value={text} />
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
