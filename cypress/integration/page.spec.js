import { article } from  '../../src/App';

describe('Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should have title of the article', ()=> {
    cy.get('h1')
      .should('contain', article.title);
  });

  it('should have date of the article', ()=> {
    cy.get('span')
      .should('contain', article.date);
  });

  it('should have the article`s text', ()=> {
    cy.get('p')
      .should('contain', article.text);
  });
});
