import React from 'react';

export const Article = ({ title, date, text }) => (
  <>
    <article className="message is-info">
      <div className="message-header">
        <h1>{title}</h1>
      </div>
    </article>
    <strong><span>{date}</span></strong>
    <p>{text}</p>
  </>

);

Article.defaultProps = {
  title: 'No title',
  date: 'No date',
  text: 'No text',
};
