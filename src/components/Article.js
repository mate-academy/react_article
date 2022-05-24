import React from 'react';

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
