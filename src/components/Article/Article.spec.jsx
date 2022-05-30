import React from 'react';
import { mount } from '@cypress/react';
import Article from './Article';

describe('Article', () => {
  it('should render custom props', () => {
    const title = 'title';
    const date = 'date';
    const text = 'Lorem';

    mount(<Article title={title} date={date} text={text} />);

    cy.get('h1').contains(title);
    cy.get('span').contains(date);
    cy.get('p').contains(text);
  });

  it('should render random props', () => {
    const title = Math.random();
    const date = Math.random();
    const text = Math.random();

    mount(<Article title={title} date={date} text={text} />);

    cy.get('h1').contains(title);
    cy.get('span').contains(date);
    cy.get('p').contains(text);
  });
});
