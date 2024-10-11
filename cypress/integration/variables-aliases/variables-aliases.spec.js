describe('Variables & Aliases', () => {

    // Manejar errores no capturados y evitar que Cypress falle por ellos
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Devuelve false para prevenir que Cypress falle
        if (err.message.includes('setup is not a function')) {
            return false;
        }
    });

    beforeEach(function () {
        cy.visit('https://demoqa.com/modal-dialogs')
    })

    it('Closures & Variables', () => {
        cy.get('#showSmallModal').then($modalBtn => {
            const smallModalText = $modalBtn.text()
            $modalBtn.click()
            cy.get('#example-modal-sizes-title-sm').contains(smallModalText, { matchCase: false })
            cy.get('#closeSmallModal').click()
            cy.url().should('eq', 'https://demoqa.com/modal-dialogs')

            cy.get('#showLargeModal').then($modalBtnLarge => {
                const largeModalText = $modalBtnLarge.text()
                $modalBtnLarge.click()
                cy.get('#example-modal-sizes-title-lg').contains(largeModalText, { matchCase: false })
                cy.get('#closeLargeModal').click()
                cy.url().should('eq', 'https://demoqa.com/modal-dialogs')
            })
        })
    })
    it('Alias, obtener el valor de variables en otros bloques', function(){
        cy.get('#showSmallModal').invoke('text').as('InvokeText')
    })
    it('Share Context', function(){
        cy.log("Invoke" + this.InvokeText)
        cy.log("Wrap" + this.WrapText)
    })
    it('Almacenar texto para usar en otro bloque', function(){
        cy.get('#showSmallModal').then($modalBtn => {
            const smallModalText = $modalBtn.text()
            /////////////////////////////
            cy.wrap(smallModalText).as('WrapText')
            /////////////////////////////
            $modalBtn.click()
            cy.get('#example-modal-sizes-title-sm').contains(smallModalText, { matchCase: false })
            cy.get('#closeSmallModal').click()
            cy.url().should('eq', 'https://demoqa.com/modal-dialogs')
            
        })
    })

})