import React from 'react';
import PropTypes from 'prop-types';


const Article = function(props) {
  const {title, date, text} = props;

  return (
    <>
      <h1 className='title'>
        {title}
      </h1>
      <span className='date'>
        {date}
      </span>
      <p className='text'>
        {text}
      </p>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string,
};

Article.defaultProps = {
  title: 'some title',
  date: 'some date',
  text: 'some text',
};

export default Article;
