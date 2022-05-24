import React from 'react';
import PropTypes from 'prop-types';

export const Article = ({ title, date, text }) => (
  <>
    <h1>{title}</h1>
    <p>{text}</p>
    <span>{date}</span>
  </>
);

// second option, just for learning.

// export const Article = props => (
//   <>
//     <h1>{props.title}</h1>
//     <p>{props.text}</p>
//     <span>{props.date}</span>
//   </>
// );

Article.defaultProps = {
  title: 'You need add title',
  text: 'You need add text',
  date: 'Also not forget about date',
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
