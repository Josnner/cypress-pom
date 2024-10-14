// Manejar errores no capturados y evitar que Cypress falle por ellos
Cypress.on('uncaught:exception', (err, runnable) => {
    // Devuelve false para prevenir que Cypress falle
    if (err.message.includes('setup is not a function')) {
        return false;
    }
});
/* ==== Test Created with Cypress Studio ==== */
it('Web-Tables-Demo', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://demoqa.com/webtables');
  cy.get('#addNewRecordButton').click();
  cy.get('#firstName').clear('P');
  cy.get('#firstName').type('Pedro Luis');
  cy.get('#lastName').clear();
  cy.get('#lastName').type('Perez');
  cy.get('#userEmail').clear();
  cy.get('#userEmail').type('pablo@gmail.com');
  cy.get('#age').clear();
  cy.get('#age').type('35');
  cy.get('#salary').clear();
  cy.get('#salary').type('23000');
  cy.get('#department').clear();
  cy.get('#department').type('QA');
  cy.get('#submit').click();
  /* ==== End Cypress Studio ==== */
});