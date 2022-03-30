import { article } from  '../../src/App';

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should have title', ()=> {
    cy.get('[data-cy="title"]')
      .should('contain', article.title);
  });

  it('should have date', ()=> {
    cy.get('[data-cy="date"]')
      .should('contain', article.date);
  });

  it('should have text', ()=> {
    cy.get('[data-cy="text"]')
      .should('contain', article.text);
  });
});
