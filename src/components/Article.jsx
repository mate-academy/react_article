import React from 'react';
import PropTypes from 'prop-types';

const Article = ({title='',text='',date=''}) => {
  <>
  return (
  <h1>{`${title}`}</h1>
  <span>{`${date}`}</span>
  <p>{`${text}`}</p>
  )
  </>
};

export default Article;
