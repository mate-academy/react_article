/* eslint-disable react/react-in-jsx-scope */
export const Article = ({ title, date, text }) => (
  <article>
    <h1>{title}</h1>
    <span>{date}</span>
    <p>{text}</p>
  </article>
);

Article.defaultProps = {
  title: 'Default title',
  date: `${new Date()}`,
  text: 'default text',
};
