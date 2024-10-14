
describe('Cypress DOM Demo', ()=>{

     // Manejar errores no capturados y evitar que Cypress falle por ellos
     Cypress.on('uncaught:exception', (err, runnable) => {
        // Devuelve false para prevenir que Cypress falle
        if (err.message.includes('setup is not a function')) {
            return false;
        }
    });

    beforeEach(function(){
        cy.visit('https://demoqa.com/accordian')
    })

    it('Acordion Test TRUE', ()=>{
        cy.get('.collapse').eq(6).then($acordion =>{
            cy.log(`Estado del elemento acordion: ${Cypress.dom.isVisible($acordion)}`)
        })
    })

    it('Acordion Test FALSE', ()=>{
        cy.get('#section1Heading').click()
        cy.get('.collapse').eq(6).then($acordion =>{
            cy.log(`Estado del elemento acordion: ${Cypress.dom.isVisible($acordion)}`)
        })
    })
})