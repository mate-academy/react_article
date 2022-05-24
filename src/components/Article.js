import React from 'react';

export const Article = (props) => {
  const value = Object.keys(props)[0];
  const obj = Object.values(props)[0];
  const objToArr = Object.entries(obj);
  const result = [];

  objToArr.forEach((element) => {
    if (value === element[0]) {
      result.push(element[1]);
    }
  });

  return (
    <>{result}</>
  );
};
