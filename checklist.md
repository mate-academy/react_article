1. [CODE STYLE] - If you have 3 or more attribues on a tag, write each attribute in the new line (to make it easier to write and read).

BAD EXAMPLE:
```jsx
<Article a={2} b={3} c={4} />
```

GOOD EXAMPLE:
```jsx
<Article
  a={2}
  b={3}
  c={4}
/>
```

2. [CODE STYLE] - Use destructuring for getting access to values of `props` object

BAD EXAMPLE:
```jsx
export const Component = props => (
  <>
    <h1>{props.firstProperty}</h1>
    <span>{props.secondProperty}</span>
    <p>{props.thirdProperty}</p>
  </>
);
```

GOOD EXAMPLE:
```jsx
export const Component = ({
 firstProperty,
 secondProperty,
 thirdProperty
}) => (
  <>
    <h1>{firstProperty}</h1>
    <span>{secondPropery}</span>
    <p>{thirdProperty}</p>
  </>
);
```

ALSO GOOD EXAMPLE: 

```jsx
export const Component = (props) => {
 const {
  firstProperty,
  secondProperty,
  thirdProperty
} = props; 

 return (
  <>
    <h1>{firstProperty}</h1>
    <span>{secondPropery}</span>
    <p>{thirdProperty}</p>
  </>
 )
};
``
