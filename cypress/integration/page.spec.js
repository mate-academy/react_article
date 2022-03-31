import { article } from  '../../src/App';

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should have title of the article', ()=> {
    cy.getByDataCy('title')
      .should('contain', article.title);
  });

  it('should have date of the article', ()=> {
    cy.getByDataCy('date')
      .should('contain', article.date);
  });

  it('should have the article`s text', ()=> {
    cy.getByDataCy('text')
      .should('contain', article.text);
  });
});
