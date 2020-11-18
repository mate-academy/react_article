/// <reference types="cypress"/>

describe('Test', () => {
  beforeEach('Open site', () => {
    cy.visit('/');
  });

  it('title in \<h1\>', () => {
    cy.get('h1').contains('Electric-propulsion');
  });

  it('date in \<span\>', () => {
    cy.get('span').contains(`August`);
  });

  it('text in \<p\>', () => {
    cy.get('p').contains('WASHINGTON');
  });
});
