import React from 'react';
import { mount } from '@cypress/react';
import { Article } from './Article';

describe('Article', () => {
  beforeEach(() => {
    mount(
      <Article
        title="Some title"
        date={new Date('2022-02-24')}
        text="Some text"
      />,
    );
  });

  it('should have a given title', () => {
    cy.getByDataCy('title').should('have.text', 'Some title');
  });

  it('should have a text date', () => {
    cy.getByDataCy('date').should('have.text', 'February 24, 2022');
  });

  it('should have a date in as dateTime attribute', () => {
    cy.getByDataCy('date').should('have.attr', 'datetime', '2022-02-24');
  });

  it('should have a given text', () => {
    cy.getByDataCy('text').should('have.text', 'Some text');
  });
});
