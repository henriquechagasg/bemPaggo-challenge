describe('Form actions test', () => {
  before(() => {
    cy.visit('/');
  });

  it('Increase input button test', () => {
    cy.get('[formcontrolname="quantity"]').should('have.value', '1');

    cy.get('#increaseBtn').click();

    cy.get('[formcontrolname="quantity"]').should('have.value', '2');
  });

  it('Decrease input button test', () => {
    cy.get('[formcontrolname="quantity"]').should('have.value', '2');

    cy.get('#decreaseBtn').click();

    cy.get('[formcontrolname="quantity"]').should('have.value', '1');
  });
});
