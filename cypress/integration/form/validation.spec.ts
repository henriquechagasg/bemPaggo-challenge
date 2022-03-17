describe('Form test', () => {
  before(() => {
    cy.visit('/');
  });

  it('Form should be invalid when any checkboxes are selected', () => {
    cy.get('#submitBtn').should('be.disabled');
  });

  it('Form should be valid when at least one checkbox is selected', () => {
    cy.get('[formcontrolname="react"]').click();
    cy.get('#submitBtn').should('not.be.disabled');
  });

  it('Form should be invalid when input value is empty', () => {
    cy.get('[formcontrolname="react"]').click();
    cy.get('[formcontrolname="quantity"]').type('{backspace}');
    cy.get('#submitBtn').should('be.disabled');
  });

  it('Form should be invalid when input value is less then one', () => {
    cy.get('[formcontrolname="react"]').click();
    cy.get('[formcontrolname="quantity"]').type('{backspace}').type('0');
    cy.get('#submitBtn').should('be.disabled');
  });
});
