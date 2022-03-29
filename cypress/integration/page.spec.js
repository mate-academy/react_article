// WRITE TESTS HERE

describe('Page', () => {
  it('should be visitable', () => {
    cy.visit('/');
  });

  it('Title should be visible', () => {
    cy.get('body').should('be.visible');
  });

  it ('Title should contain "React Article"', () => {
    cy.get('body').should('contain', 'React Article');
  });
});
