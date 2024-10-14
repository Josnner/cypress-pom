describe('Cypress Browser Demo', ()=>{
    it('Browser Properties', ()=>{
        cy.visit('https://www.whatismybrowser.com/es/')

        if(Cypress.browser.name === 'chrome'){
            cy.get('.string-major > a').should('have.text', 'Chrome 129 on Windows 10')
        }else if(Cypress.browser.name === 'firefox'){
            cy.get('.string-major > a').should('have.text', 'Firefox 131 on Windows 10')
        }
    })
})