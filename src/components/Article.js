import React from 'react';
import PropTypes from 'prop-types';
import Title from './title/title';
import Text from './text/text';
import Date from './date/date';

const Article = ({
  title,
  text,
  date,
}) => (
  <>
    <Title
      title={title}
    />
    <Text
      text={text}
    />
    <Date
      date={date}
    />
  </>

);

Article.defaultProps = {
  title: 'no title',
  text: 'no text',
  date: 'no date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
