import PropTypes from 'prop-types';
import React from 'react';

const Article = (props) (
    <>
        <h1>{props.title || null}</h1>
        <p> {props.text.length < 120 ? props.text : null}</p>
        <span>{props.date || null}</span>
    </>

);


export default Article;